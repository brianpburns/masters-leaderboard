import { RootState } from 'src/client/store';

export const selectCurrentTeam = (state: RootState) => state.currentTeam;
export const selectCurrentTeamGolferIds = (state: RootState) =>
  state.currentTeam.golferIds;
export const selectGolfersSavedRef = (state: RootState) =>
  state.currentTeam.savedRef;
