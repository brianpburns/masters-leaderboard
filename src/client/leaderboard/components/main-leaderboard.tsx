import React, { useCallback, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useLoadTeams } from '../../api/hooks/use-load-teams';
import { teamsPrizeMoney } from '../../api/requests';
import {
  golfersState,
  prizeMoneyState,
  teamsState,
} from '../../api/state/atoms';

import { LeaderboardTable } from './leaderboard-table';
import { LeaderboardContainer, StyledLogo } from './styled';

const mastersLogoSrc =
  'http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/augusta-masters-2019/d05d1861-masters-logo-masters-gimp_0ds03p0dq03p000000001.png';

const usePrizeMoney = () => {
  const teams = useLoadTeams();
  console.log('teams', teams);

  const rankingsWithPrizeMoney = useRecoilValue(prizeMoneyState);
  const golfers = useRecoilValue(golfersState);
  const setTeamsMoney = useSetRecoilState(teamsState);

  useCallback(() => {
    const teamsWithMoney = teamsPrizeMoney(
      golfers,
      rankingsWithPrizeMoney,
      teams
    );

    setTeamsMoney(teamsWithMoney);
  }, [golfers, rankingsWithPrizeMoney, setTeamsMoney, teams]);
};

export const MainLeaderboard = () => {
  usePrizeMoney();

  return (
    <LeaderboardContainer>
      <StyledLogo>
        <img src={mastersLogoSrc} alt='masters logo' />
      </StyledLogo>
      <LeaderboardTable />
    </LeaderboardContainer>
  );
};
