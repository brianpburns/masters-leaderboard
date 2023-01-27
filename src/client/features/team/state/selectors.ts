import { RootState } from 'src/client/store';

export const selectCurrentTeam = (state: RootState) => state.currentTeam.team;
export const selectCurrentTeamGolferIds = (state: RootState) =>
  state.currentTeam.team.golferIds;
export const selectGolfersSavedRef = (state: RootState) =>
  state.currentTeam.team.savedRef;
export const selectIsNewTeam = (state: RootState) =>
  state.currentTeam.isNewTeam;
