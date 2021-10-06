import React from 'react';

import { LeaderboardTable } from './leaderboard-table';
import { LeaderboardContainer, StyledLogo } from './styled';

const mastersLogoSrc =
  'http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/augusta-masters-2019/d05d1861-masters-logo-masters-gimp_0ds03p0dq03p000000001.png';

export const MainLeaderboard = () => {
  return (
    <LeaderboardContainer>
      <StyledLogo>
        <img src={mastersLogoSrc} alt='masters logo' />
      </StyledLogo>
      <LeaderboardTable />
    </LeaderboardContainer>
  );
};
