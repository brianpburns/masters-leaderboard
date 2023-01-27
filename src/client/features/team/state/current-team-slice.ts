import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TeamState } from '../types';

interface CurrentTeamState {
  team: TeamState;
  isNewTeam: boolean;
}

export const initialCurrentTeamState: CurrentTeamState = {
  team: { id: 0, owner: '', name: '', golferIds: [], savedRef: [] },
  isNewTeam: false,
};

const currentTeam = createSlice({
  name: 'currentTeam',
  initialState: initialCurrentTeamState,
  reducers: {
    setTeam(state, action: PayloadAction<TeamState>) {
      state.team = {
        id: action.payload.id,
        owner: action.payload.owner,
        name: action.payload.name,
        golferIds: action.payload.golferIds,
        savedRef: action.payload.golferIds,
      };
    },
    addGolferId(state, action: PayloadAction<number>) {
      state.team.golferIds.push(action.payload);
    },
    removeGolferId(state, action: PayloadAction<number>) {
      state.team.golferIds = state.team.golferIds.filter(
        (golferId) => golferId !== action.payload
      );
    },
    setGolferIds(state, action: PayloadAction<number[]>) {
      state.team.golferIds = action.payload;
    },
    setGolfersRef(state, action: PayloadAction<number[]>) {
      state.team.savedRef = action.payload;
    },
    setIsNewTeam(state, action: PayloadAction<boolean>) {
      state.isNewTeam = action.payload;
    },
  },
});

export const {
  setTeam,
  addGolferId,
  removeGolferId,
  setGolferIds,
  setGolfersRef,
  setIsNewTeam,
} = currentTeam.actions;
export const currentTeamReducer = currentTeam.reducer;
