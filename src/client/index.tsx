import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Root } from './features/app';
import './index.css';
import { store } from './store/store';

const localBootstrap = async () => {
  // eslint-disable-next-line no-console
  console.log('starting local devserver');

  const { worker } = await import('./mock-server');
  worker.start();

  bootstrap();
};

const bootstrap = async () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Root />
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
