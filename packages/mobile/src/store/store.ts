import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { leaderboardReducer } from 'src/leaderboard/state/leaderboard-slice';
import { currentTeamReducer } from 'src/team-page/state/current-team-slice';
import { apiReducer, apiSlice } from '../api/state/api-slice';
import { globalReducer } from './global-slice';

const rootReducer = combineReducers({
  global: globalReducer,
  currentTeam: currentTeamReducer,
  leaderboard: leaderboardReducer,
  [apiSlice.reducerPath]: apiReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export const setupStore = (preloadedState?: Partial<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(apiSlice.middleware),
  });

export const store = setupStore();

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
