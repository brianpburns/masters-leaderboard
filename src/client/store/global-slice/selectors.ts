import { RootState } from '../store';

export const tokenSelector = (state: RootState) => state.global.token;

export const selectionPhaseSelector = (state: RootState) =>
  state.global.selectionPhase;
