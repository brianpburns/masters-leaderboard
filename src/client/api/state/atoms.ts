import { atom } from 'recoil';
import { inviteesData } from 'src/client/data/invitees-data';

import { Player } from '../../../types';

export const inviteesState = atom<Player[]>({
  key: '@app/invitees',
  default: inviteesData.players,
});
