import React from 'react';
import styled from 'styled-components';

import { MainLeaderboard } from './MainLeaderboard';

const AppContainer = styled.div`
  display: grid;
  background-color: green;
  background-image: url('//d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/masters-2022/9721323d-masters.jpg');
  background-repeat: no-repeat;
  background-position: 'left center';
  background-size: cover;
  width: 100%;
  height: 100vh;
  overflow: auto;
`;

export const App = () => {
  return (
    <AppContainer>
      <MainLeaderboard />
    </AppContainer>
  );
};
