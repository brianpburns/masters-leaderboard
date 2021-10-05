import { atom } from 'recoil';

export const teamIdState = atom<string>({
  key: '@teams/id',
  default: '',
});

export const teamOwnerState = atom<string>({
  key: '@teams/owner',
  default: '',
});

export const teamNameState = atom<string>({
  key: '@teams/name',
  default: '',
});

export const teamGolfersIdsState = atom<number[]>({
  key: '@team/golferIds',
  default: [],
});
