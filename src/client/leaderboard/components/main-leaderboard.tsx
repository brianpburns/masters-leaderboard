import { Button } from '@material-ui/core';
import React from 'react';

import { LeaderboardTable } from './leaderboard-table';
import { LeaderboardContainer, StyledLogo } from './styled';

import { getTeam } from '../../api/fetch/get-team';

const mastersLogoSrc =
  'http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/augusta-masters-2019/d05d1861-masters-logo-masters-gimp_0ds03p0dq03p000000001.png';

export const MainLeaderboard = () => (
  <LeaderboardContainer>
    <Button onClick={getTeam}>Push Me</Button>
    <StyledLogo>
      <img src={mastersLogoSrc} />
    </StyledLogo>
    <LeaderboardTable />
  </LeaderboardContainer>
);
