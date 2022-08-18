import { atom } from 'recoil';
import { inviteesData } from 'src/client/data/invitees-data';

import { GolferMoneyRankings, Player } from '../../../types';

export const golferMoneyRankingsState = atom<GolferMoneyRankings | null>({
  key: '@app/prizeMoney',
  default: null,
});

export const inviteesState = atom<Player[]>({
  key: '@app/invitees',
  default: inviteesData.players,
});
