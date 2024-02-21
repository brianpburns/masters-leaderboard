import { renderHook } from '@testing-library/react-hooks';
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { RootState, setupStore } from '../store';
import { defaultState } from './store';

export function reduxHookTestWrapper<T, U>(
  customHook: (props: U) => T,
  preloadedState: Partial<RootState> = defaultState
) {
  return renderHook((props: PropsWithChildren<U>) => customHook(props), {
    wrapper: ({ children }) => {
      const store = setupStore({ ...defaultState, ...preloadedState });

      return <Provider store={store}>{children}</Provider>;
    },
  });
}
