import { atom } from 'recoil';

import { Golfers, GolferMoneyRankings, Team } from '../../../types';

export const cutLineState = atom<number>({
  key: '@app/cutLine',
  default: 0,
});

export const teamsState = atom<Team[]>({
  key: '@app/teams',
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
