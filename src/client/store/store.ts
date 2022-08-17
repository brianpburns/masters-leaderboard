import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';
import { alertReducer } from '../features/shared';
import { globalReducer } from './global-slice';

const rootReducer = combineReducers({
  global: globalReducer,
  alert: alertReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({ reducer: rootReducer, preloadedState });

export const store = setupStore();

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<typeof rootReducer>;
