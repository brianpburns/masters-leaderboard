import { RootState } from '../store';

export const selectAuthToken = (state: RootState) => state.global.token;

export const selectPhaseSelection = (state: RootState) =>
  state.global.selectionPhase;

export const selectGolfersList = (state: RootState) =>
  state.global.golferScores;

export const selectGolferRankings = (state: RootState) =>
  state.global.golferRankings;
