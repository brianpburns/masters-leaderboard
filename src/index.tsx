import React from 'react';
import ReactDOM from 'react-dom';
import { MutableSnapshot, RecoilRoot } from 'recoil';

import { cutLineState, golfersState, Root } from './app';
import { fetchData } from './util/requests';

const bootstrap = async () => {
  const { cutLine, golfers } = await fetchData();

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

bootstrap();

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
