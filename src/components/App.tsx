import React from 'react';
import styled from 'styled-components';

import { MainLeaderboard } from './MainLeaderboard';

const AppContainer = styled.div`
  display: grid;
  background-color: green;
  background-image: url('//d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/masters-2022/9721323d-masters.jpg');
  opacity: 0.5;
  width: 100%;
  height: 100vh;
`;

export const App = () => {
  return (
    <AppContainer>
      <MainLeaderboard />
    </AppContainer>
  );
};
