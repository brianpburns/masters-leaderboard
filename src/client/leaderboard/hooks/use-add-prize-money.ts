import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { prizeMoneyState, teamsState } from 'src/client/api';
import { golfersState } from 'src/client/app';
import { Team } from 'src/types';
import { rankTeams } from '../utils/rank-teams';

/**
 * Adds up each golfer's prize money to get the team's total. Returned as:
 * {
 *   ...teamData,
 *   prizeMoney
 * }
 */
export const useAddPrizeMoney = () => {
  const teams = useRecoilValue(teamsState);
  const rankingsWithPrizeMoney = useRecoilValue(prizeMoneyState);
  const golfersData = useRecoilValue(golfersState);
  const [rankedTeams, setRankedTeams] = useState<Team[]>([]);

  useEffect(() => {
    const calculateTeamMoney = (team: Team) => {
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
