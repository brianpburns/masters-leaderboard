import { PreloadedState } from '@reduxjs/toolkit';
import { render, RenderOptions } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { initialLeaderboardState } from '../features/leaderboard';
import { initialAlertState } from '../features/shared';
import { initialTeamState } from '../features/team';
import { AppStore, initialGlobalState, RootState, setupStore } from '../store';

export const defaultState: Omit<RootState, 'api'> = {
  global: initialGlobalState,
  alert: initialAlertState,
  currentTeam: initialTeamState,
  leaderboard: initialLeaderboardState,
};

/**
 * This type interface extends the default options for render from RTL, as well
 * as allows the user to specify other things such as initialState, store.
 */
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<PreloadedState<RootState>>;
  storeOverride?: AppStore;
}

/**
 * Wraps a passed in component in a Provider with the store and sets up
 * all of React Testing Library's query functions
 */
export const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState,
    // Automatically create a store instance if no store was passed in
    storeOverride,
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const state = { ...defaultState, ...preloadedState };
  const store = storeOverride || setupStore(state);

  const Wrapper = ({
    children,
  }: PropsWithChildren<Record<string, unknown>>) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
