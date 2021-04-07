import React from 'react';
import ReactDOM from 'react-dom';
import { MutableSnapshot, RecoilRoot } from 'recoil';

import { cutLineState, golfersState, Root } from './app';
import { fetchData } from './api/fetch/requests';

const localBootstrap = async () => {
  const { worker } = await import('./mocks');
  worker.start();

  bootstrap();
};

const bootstrap = async () => {
  const { cutLine, golfers, rankingsWithPrizeMoney } = await fetchData();

  console.log(rankingsWithPrizeMoney);

  const initialiseState = ({ set }: MutableSnapshot) => {
    set(golfersState, golfers);
    set(cutLineState, cutLine);
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
if (import.meta.hot) {
  import.meta.hot.accept();
}
