import React from 'react';
import ReactDOM from 'react-dom';
import { MutableSnapshot, RecoilRoot } from 'recoil';

import { cutLineState, golfersState, Root } from './app';
import { fetchData } from './api';
import { entrantsState, prizeMoneyState } from './api/state/atoms';

const localBootstrap = async () => {
  const { worker } = await import('./mocks');
  worker.start();

  bootstrap();
};

const bootstrap = async () => {
  const { cutLine, golfers, rankingsWithPrizeMoney, teamMoney } =
    await fetchData();

  console.log('values', cutLine, golfers, rankingsWithPrizeMoney, teamMoney);

  const initialiseState = ({ set }: MutableSnapshot) => {
    set(entrantsState, teamMoney);
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
