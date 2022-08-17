import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface GlobalState {
  token: string;
}

const initialState: GlobalState = {
  token: '',
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
  },
});

export const { setToken } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
