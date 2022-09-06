import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectGolfersList, useAppSelector } from 'src/client/store';
import { selectGolferRankings } from 'src/client/store/global-slice/selectors';
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

  useEffect(() => {
    const calculateTeamMoney = (team: Team) => {
      if (!golfersData || !rankingsWithPrizeMoney) {
        return {
          ...team,
          prizeMoney: 0,
        };
      }

      const teamPrizeMoney = team.golfer_ids.reduce((accum, id) => {
        try {
          const position = golfersData[id].position;
          return accum + rankingsWithPrizeMoney[position].prizeMoney;
        } catch (err) {
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
  }, [golfersData, rankingsWithPrizeMoney, setRankedTeams, teams]);

  return rankedTeams;
};