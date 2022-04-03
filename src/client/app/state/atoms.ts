import { atom } from 'recoil';

export const selectionPhaseState = atom<boolean>({
  key: '@app/selectionPhase',
  default: true,
});
