import { atom } from 'recoil';

import { Golfers, GolferRankings } from '../../types';

export const cutLineState = atom<number>({
  key: '@app/cutLine',
  default: 0,
});

export const golfersState = atom<Golfers>({
  key: '@app/golfers',
  default: {},
});

export const golfersLeaderboard = atom<GolferRankings>({
  key: '@app/golfersLeaderboard',
  default: {},
});

export const deadlineState = atom<string>({
  key: '@app/deadline',
  default: '',
});
