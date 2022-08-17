import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AlertSeverity } from '../types';

export interface AlertState {
  open: boolean;
  severity: AlertSeverity;
  message: string;
  duration: number;
}

export const initialState: AlertState = {
  open: false,
  severity: 'success',
  message: '',
  duration: 3000,
};

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlertState(state, action: PayloadAction<AlertState>) {
      state.open = action.payload.open;
      state.severity = action.payload.severity;
      state.message = action.payload.message;
      state.duration = action.payload.duration;
    },
  },
});

export const { setAlertState } = alertSlice.actions;
export const alertReducer = alertSlice.reducer;
