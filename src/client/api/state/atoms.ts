import { atom } from 'recoil';
import { inviteesData } from 'src/client/data/invitees-data';

import { Golfers, GolferMoneyRankings, Team, Player } from '../../../types';

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

export const golferMoneyRankingsState = atom<GolferMoneyRankings>({
  key: '@app/prizeMoney',
  default: {},
});

export const inviteesState = atom<Player[]>({
  key: '@app/invitees',
  default: inviteesData.players,
});
