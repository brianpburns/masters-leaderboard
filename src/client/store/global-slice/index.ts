import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GolferMoneyRankings, Golfers } from 'src/types';

export interface GlobalState {
  token: string | null;
  selectionPhase: boolean;
  golfers: Golfers;
  golferRankings: GolferMoneyRankings;
}

export const initialState: GlobalState = {
  token: null,
  selectionPhase: true,
  golfers: {},
  golferRankings: {},
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string | null>) {
      state.token = action.payload;
    },
    setGolfersState(state, action: PayloadAction<Golfers>) {
      state.golfers = action.payload;
    },
    setGolferRankings(state, action: PayloadAction<GolferMoneyRankings>) {
      state.golferRankings = action.payload;
    },
  },
});

export const { setToken, setGolfersState, setGolferRankings } =
  globalSlice.actions;
export const globalReducer = globalSlice.reducer;
