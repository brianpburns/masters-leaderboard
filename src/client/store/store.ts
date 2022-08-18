import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';
import { apiReducer, apiSlice } from '../api/api-slice';
import { alertReducer } from '../features/shared';
import { currentTeamReducer } from '../features/team';
import { globalReducer } from './global-slice';

const rootReducer = combineReducers({
  global: globalReducer,
  alert: alertReducer,
  currentTeam: currentTeamReducer,
  [apiSlice.reducerPath]: apiReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleWare) =>
      getDefaultMiddleWare().concat(apiSlice.middleware),
  });

export const store = setupStore();

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<typeof rootReducer>;
