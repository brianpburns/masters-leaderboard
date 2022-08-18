import { RootState } from '../store';

export const selectAuthToken = (state: RootState) => state.global.token;

export const selectPhaseSelection = (state: RootState) =>
  state.global.selectionPhase;
