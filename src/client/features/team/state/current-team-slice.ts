import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TeamState } from '../types';

export const initialTeamState: TeamState = {
  id: 0,
  owner: '',
  name: '',
  golferIds: [],
  savedRef: [],
};

const currentTeam = createSlice({
  name: 'currentTeam',
  initialState: initialTeamState,
  reducers: {
    setTeam(state, action: PayloadAction<TeamState>) {
      state.id = action.payload.id;
      state.owner = action.payload.owner;
      state.name = action.payload.name;
      state.golferIds = action.payload.golferIds;
      state.savedRef = action.payload.golferIds;
    },
    addGolferId(state, action: PayloadAction<number>) {
      state.golferIds.push(action.payload);
    },
    removeGolferId(state, action: PayloadAction<number>) {
      state.golferIds = state.golferIds.filter(
        (golferId) => golferId !== action.payload
      );
    },
    setGolferIds(state, action: PayloadAction<number[]>) {
      state.golferIds = action.payload;
    },
    setGolfersRef(state, action: PayloadAction<number[]>) {
      state.savedRef = action.payload;
    },
  },
});

export const {
  setTeam,
  addGolferId,
  removeGolferId,
  setGolferIds,
  setGolfersRef,
} = currentTeam.actions;
export const currentTeamReducer = currentTeam.reducer;
