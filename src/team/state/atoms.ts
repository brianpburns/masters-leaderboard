import { atom } from 'recoil';

import { Teams } from '../types';

export const allTeamsState = atom<Teams>({
  key: '@teams',
  default: {
    '0': {
      id: '0',
      teamName: 'Burnin it up',
      owner: 'Burns',
      selectedGolferIds: ['35891'],
    },
  },
});

export const activeTeamIdState = atom<string>({
  key: '@teams/id',
  default: '0',
});
