import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MutableSnapshot, RecoilRoot } from 'recoil';
import {
  generateGolferData,
  golferMoneyRankingsState,
  golfersState,
} from './api';
import { Root } from './features/app';
import './index.css';
import { store } from './store/store';
import { TempStateSetupComponent } from './temp-state-component';

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
    set(golferMoneyRankingsState, golferMoneyRankings);
  };

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <RecoilRoot initializeState={initialiseState}>
          <TempStateSetupComponent cutLine={cutLine} />
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
