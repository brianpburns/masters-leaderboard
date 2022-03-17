import React from 'react';
import ReactDOM from 'react-dom';
import { MutableSnapshot, RecoilRoot } from 'recoil';
import { generateLeaderboardData } from './api/requests';
import { prizeMoneyState } from './api/state/atoms';
import { cutLineState, golfersState, Root } from './app';
import './index.css';

const localBootstrap = async () => {
  // eslint-disable-next-line no-console
  console.log('starting local devserver');

  const { worker } = await import('./mock-server');
  worker.start();

  bootstrap();
};

const bootstrap = async () => {
  const { golfers, rankingsWithPrizeMoney, cutLine } =
    await generateLeaderboardData();

  const initialiseState = ({ set }: MutableSnapshot) => {
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

if (process.env.SNOWPACK_PUBLIC_STANDALONE === 'true') {
  localBootstrap();
} else {
  bootstrap();
}

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
// if (import.meta.hot) {
//   import.meta.hot.accept();
// }
