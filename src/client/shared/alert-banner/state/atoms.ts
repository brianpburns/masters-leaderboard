import { atom } from 'recoil';
import { AlertSeverity } from '../types';

export const alertOpenState = atom<boolean>({
  key: '@alert/open',
  default: false,
});

export const alertSeverityState = atom<AlertSeverity>({
  key: '@alert/severity',
  default: 'success',
});

export const alertMessageState = atom<string>({
  key: '@alert/message',
  default: '',
});

export const alertDurationState = atom<number>({
  key: '@alert/duration',
  default: 3000,
});
