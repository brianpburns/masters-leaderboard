import React from 'react';
import ReactDOM from 'react-dom';
import { MutableSnapshot, RecoilRoot } from 'recoil';
import {
  generateGolferData,
  golferMoneyRankingsState,
  cutLineState,
  golfersState,
} from './api';
import { Root, selectionPhaseState } from './features/app';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store';

const localBootstrap = async () => {
  // eslint-disable-next-line no-console
  console.log('starting local devserver');

  const { worker } = await import('./mock-server');
  worker.start();

  bootstrap();
};

const bootstrap = async () => {
  const { golfers, golferMoneyRankings, cutLine } = await generateGolferData();

  const initialiseState = ({ set }: MutableSnapshot) => {
    set(golfersState, golfers);
    set(cutLineState, cutLine);
    set(golferMoneyRankingsState, golferMoneyRankings);
    set(selectionPhaseState, false);
  };

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <RecoilRoot initializeState={initialiseState}>
          <Root />
        </RecoilRoot>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

if (process.env.STANDALONE === 'true') {
  localBootstrap();
} else {
  bootstrap();
}
