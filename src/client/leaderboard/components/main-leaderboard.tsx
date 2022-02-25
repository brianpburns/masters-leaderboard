import React from 'react';
import { LeaderboardTable } from './leaderboard-table';
import { LeaderboardContainer } from './styled';

export const MainLeaderboard = () => {
  return (
    <LeaderboardContainer>
      <LeaderboardTable />
    </LeaderboardContainer>
  );
};
