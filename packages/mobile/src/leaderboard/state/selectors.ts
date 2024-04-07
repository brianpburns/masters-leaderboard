import { RootState } from 'src/store';

export const selectTeams = (state: RootState) => state.leaderboard.teams;
