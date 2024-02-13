import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Team } from 'src/types';

interface LeaderboardState {
  cutLine: number;
  teams: Team[];
}

export const initialLeaderboardState: LeaderboardState = {
  cutLine: 0,
  teams: [],
};

const leaderboard = createSlice({
  name: 'leaderboard',
  initialState: initialLeaderboardState,
  reducers: {
    setCutLineState(state, action: PayloadAction<number>) {
      state.cutLine = action.payload;
    },
    setTeamsState(state, action: PayloadAction<Team[]>) {
      state.teams = action.payload;
    },
  },
});

export const { setCutLineState, setTeamsState } = leaderboard.actions;
export const leaderboardReducer = leaderboard.reducer;
