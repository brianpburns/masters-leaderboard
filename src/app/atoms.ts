import { atom } from 'recoil';

import { Golfers, GolfersLeaderboard, Teams } from '../types/types';

export const cutLineState = atom<number>({
  key: '@app/cutLine',
  default: 0,
});

export const golfersState = atom<Golfers>({
  key: '@app/golfers',
  default: {},
});

export const golfersLeaderboard = atom<GolfersLeaderboard>({
  key: '@app/golfersLeaderboard',
  default: {},
});

export const teamsState = atom<Teams>({
  key: '@app/teams',
  default: { '0': { id: '0', owner: 'Burns', golfers: [] } },
});

export const deadlineState = atom<string>({
  key: '@app/deadline',
  default: '',
});
