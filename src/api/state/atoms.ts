import { atom } from 'recoil';

import { Golfers, GolferMoneyRankings, Entrant } from '../../types';

export const cutLineState = atom<number>({
  key: '@app/cutLine',
  default: 0,
});

export const entrantsState = atom<Entrant[]>({
  key: '@app/entrants',
  default: [],
});

export const golfersState = atom<Golfers>({
  key: '@app/golfers',
  default: {},
});

export const prizeMoneyState = atom<GolferMoneyRankings>({
  key: '@app/prizeMoney',
  default: {},
});
