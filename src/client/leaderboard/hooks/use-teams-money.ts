import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { teamsPrizeMoney } from 'src/client/api/requests';
import { teamsState, prizeMoneyState } from 'src/client/api/state/atoms';
import { golfersState } from 'src/client/app';
import { Team } from 'src/types';

export const useTeamsMoney = () => {
  const teamsData = useRecoilValue(teamsState);
  const rankingsWithPrizeMoney = useRecoilValue(prizeMoneyState);
  const golfers = useRecoilValue(golfersState);
  const [teamsWithMoney, setTeamsWithMoney] = useState<Team[]>([]);

  useEffect(() => {
    const cashTotals = teamsPrizeMoney(
      golfers,
      rankingsWithPrizeMoney,
      teamsData
    );

    setTeamsWithMoney(cashTotals);
  }, [golfers, rankingsWithPrizeMoney, setTeamsWithMoney, teamsData]);

  return teamsWithMoney;
};
