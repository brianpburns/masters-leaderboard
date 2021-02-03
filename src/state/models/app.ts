import produce from 'immer';
import { mockGolfersList } from '../../data/mockGolfersList';
import { GolferData, Team } from '../../types/types';

import { ActionsUnion, createAction } from '../utils/redux';

export const appActions = {
  updateTeam: (payload: { teamId: string; team: Team }) =>
    createAction('UPDATE_TEAM', payload),
};

export type AppActions = ActionsUnion<typeof appActions>;

export type AppState = {
  cutLine: number;
  golfers: { [id: string]: GolferData };
  teams: { [id: string]: Team };
  submissionDeadline: string;
};

export const initialState: AppState = {
  cutLine: 0,
  golfers: mockGolfersList,
  teams: {
    '0': {
      owner: 'Burns',
      golfers: [],
    },
  },
  submissionDeadline: '',
};

export const appReducer = produce((draft: AppState, action: AppActions) => {
  switch (action.type) {
    case 'UPDATE_TEAM':
      draft.teams[action.payload.teamId] = action.payload.team;
      break;
  }
}, initialState);
