import { atom } from 'recoil';

export const currentUserIdState = atom<number>({
  key: '@app/currentUserIdState',
  default: 1,
});
