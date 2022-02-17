import React from 'react';
import ReactDOM from 'react-dom';
import { MutableSnapshot, RecoilRoot } from 'recoil';

import { cutLineState, golfersState, Root } from './app';
import { fetchLeaderboardData } from './api';
import { prizeMoneyState } from './api/state/atoms';
import { golfersLeaderboard } from './api/requests';

const localBootstrap = async () => {
  const { worker } = await import('./mock-server');
  worker.start();

  bootstrap();
};

const bootstrap = async () => {
  const { cutLine, player, currentRound } = await fetchLeaderboardData();
  const { golfers, rankingsWithPrizeMoney } = golfersLeaderboard(
    player,
    currentRound
  );

  const initialiseState = ({ set }: MutableSnapshot) => {
    // set(teamsState, teamsMoney);
    set(golfersState, golfers);
    set(cutLineState, cutLine);
    set(prizeMoneyState, rankingsWithPrizeMoney);
  };

  ReactDOM.render(
    <React.StrictMode>
      <RecoilRoot initializeState={initialiseState}>
        <Root />
      </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

if (process.env.NODE_ENV === 'development') {
  localBootstrap();
} else {
  bootstrap();
}

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
// if (import.meta.hot) {
//   import.meta.hot.accept();
// }
