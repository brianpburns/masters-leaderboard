import { createSelector } from 'reselect';
import { AppState } from '../models/app';

export const appSelector = (state: AppState) => state;

export const golfersSelector = createSelector(appSelector, app => app.golfers);

export const teamsSelector = createSelector(appSelector, app => app.teams);




