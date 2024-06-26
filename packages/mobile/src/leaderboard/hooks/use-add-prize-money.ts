import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectGolferRankings, selectGolfersList, selectPhaseSelection, useAppSelector } from 'src/store';
import { Team, TeamWithPrizeMoney } from 'src/types';
import { selectTeams } from '../state/selectors';
import { rankTeams } from '../utils/rank-teams';

/**
 * Adds up each golfer's prize money to get the team's total. Returned as:
 * {
 *   ...teamData,
 *   prizeMoney
 * }
 */
export const useAddPrizeMoney = () => {
  const teams = useSelector(selectTeams);
  const rankingsWithPrizeMoney = useAppSelector(selectGolferRankings);
  const golfersData = useSelector(selectGolfersList);
  const [rankedTeams, setRankedTeams] = useState<TeamWithPrizeMoney[]>([]);
  const selectionPhase = useSelector(selectPhaseSelection);

  useEffect(() => {
    const calculateTeamMoney = (team: Team) => {
      if (!golfersData || Object.keys(rankingsWithPrizeMoney).length === 0 || selectionPhase) {
        return {
          ...team,
          prizeMoney: 0,
        };
      }

      const teamPrizeMoney = team.golfer_ids.reduce((accum, id) => {
        try {
          const { position } = golfersData[id];
          return accum + rankingsWithPrizeMoney[position].prizeMoney;
        } catch (err) {
          console.error('err', err);
          throw new Error(`No ID for ${id}`);
        }
      }, 0);

      return {
        ...team,
        prizeMoney: teamPrizeMoney,
      };
    };

    const cashTotals = rankTeams(teams.map((team) => calculateTeamMoney(team)));

    setRankedTeams(cashTotals);
  }, [golfersData, rankingsWithPrizeMoney, selectionPhase, setRankedTeams, teams]);

  return rankedTeams;
};
