import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { Provider } from 'react-redux';
import { MutableSnapshot, RecoilRoot } from 'recoil';
import { RootState, setupStore } from '../store';
import { defaultState } from './store';

export function reduxHookTestWrapper<T, U>(
  customHook: (props: U) => T,
  initializeState?: (snapshot: MutableSnapshot) => void,
  preloadedState: Partial<RootState> = defaultState
) {
  return renderHook((props: U) => customHook(props), {
    wrapper: ({ children }) => {
      const store = setupStore({ ...defaultState, ...preloadedState });

      return (
        <RecoilRoot {...{ initializeState }}>
          <Provider store={store}>{children}</Provider>
        </RecoilRoot>
      );
    },
  });
}
