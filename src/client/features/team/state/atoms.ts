import { atom } from 'recoil';

export const teamIdState = atom<number>({
  key: '@teams/id',
  default: 0,
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

export const savedGolfersIdsRefState = atom<number[]>({
  key: '@team/savedRef',
  default: [],
});
