export { initialState as initialGlobalState } from './global-slice';
export { useGlobalState as useAuthToken } from './global-slice/hooks';
export {
  selectAuthToken,
  selectGolfersList,
  selectPhaseSelection,
} from './global-slice/selectors';
export { useAppDispatch, useAppSelector } from './hooks';
export { setupStore, store } from './store';
export type { AppStore, RootState } from './store';
