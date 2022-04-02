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

export const golfersState = atom<Golfers | null>({
  key: '@app/golfers',
  default: null,
});

export const golferMoneyRankingsState = atom<GolferMoneyRankings | null>({
  key: '@app/prizeMoney',
  default: null,
});

export const inviteesState = atom<Player[]>({
  key: '@app/invitees',
  default: inviteesData.players,
});
