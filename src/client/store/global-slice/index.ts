import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Golfers } from 'src/types';

export interface GlobalState {
  token: string;
  selectionPhase: boolean;
  golfers: Golfers;
}

export const initialState: GlobalState = {
  token: '',
  selectionPhase: true,
  golfers: {},
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    setGolfersState(state, action: PayloadAction<Golfers>) {
      state.golfers = action.payload;
    },
  },
});

export const { setToken, setGolfersState } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
