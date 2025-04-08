import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GolferMoneyRankings, GolferScores, Player } from 'src/types';

export interface GlobalState {
  token: string | null;
  selectionPhase: boolean;
  golferScores: GolferScores | null;
  golferRankings: GolferMoneyRankings;
  golfersData: Player[];
}

export const initialGlobalState: GlobalState = {
  token: null,
  selectionPhase: false,
  golferScores: null,
  golferRankings: {},
  golfersData: [],
};

const globalSlice = createSlice({
  name: 'global',
  initialState: initialGlobalState,
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
    setSelectionPhaseState(state, action: PayloadAction<boolean>) {
      state.selectionPhase = action.payload;
    },
    setGolfersDataState(state, action: PayloadAction<Player[]>) {
      state.golfersData = action.payload;
    },
  },
});

export const { setToken, setGolfersState, setGolferRankings, setSelectionPhaseState, setGolfersDataState } =
  globalSlice.actions;
export const globalReducer = globalSlice.reducer;
