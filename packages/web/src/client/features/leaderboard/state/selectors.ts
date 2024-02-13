import { RootState } from 'src/client/store';

export const selectTeams = (state: RootState) => state.leaderboard.teams;
