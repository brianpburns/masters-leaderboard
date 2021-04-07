import React from 'react';
import styled from 'styled-components';

import { LeaderboardTable } from './leaderboard-table';
import { LeaderboardContainer, StyledLogo } from './styled';

const mastersLogoSrc =
  'http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/augusta-masters-2019/d05d1861-masters-logo-masters-gimp_0ds03p0dq03p000000001.png';

export const MainLeaderboard = () => (
  <LeaderboardContainer>
    <StyledLogo>
      <img src={mastersLogoSrc} />
    </StyledLogo>
    <LeaderboardTable />
  </LeaderboardContainer>
);
