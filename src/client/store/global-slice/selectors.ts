import { RootState } from '../store';

export const tokenSelector = (state: RootState) => state.global.token;
