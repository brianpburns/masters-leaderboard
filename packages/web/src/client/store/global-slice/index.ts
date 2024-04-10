import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GolferMoneyRankings, GolferScores } from 'src/types';

export interface GlobalState {
  token: string | null;
  selectionPhase: boolean;
  golferScores: GolferScores | null;
  golferRankings: GolferMoneyRankings;
}

export const initialState: GlobalState = {
  token: null,
  selectionPhase: true,
  golferScores: null,
  golferRankings: {},
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string | null>) {
      state.token = action.payload;
    },
    setGolfersState(state, action: PayloadAction<GolferScores>) {
      state.golferScores = action.payload;
    },
    setGolferRankings(state, action: PayloadAction<GolferMoneyRankings>) {
      state.golferRankings = action.payload;
    },
  },
});

export const { setToken, setGolfersState, setGolferRankings } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
