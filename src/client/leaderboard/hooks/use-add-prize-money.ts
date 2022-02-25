import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { prizeMoneyState, teamsState } from 'src/client/api';
import { golfersState } from 'src/client/app';
import { TeamType } from 'src/types';

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
  const [teamsWithMoney, setTeamsWithMoney] = useState<TeamType[]>([]);

  useEffect(() => {
    const calculateTeamMoney = (team: TeamType) => {
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

    const cashTotals = teams.map((team) => calculateTeamMoney(team));

    setTeamsWithMoney(cashTotals);
  }, [golfersData, rankingsWithPrizeMoney, setTeamsWithMoney, teams]);

  return teamsWithMoney;
};
