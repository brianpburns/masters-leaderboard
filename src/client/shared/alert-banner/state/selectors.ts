import { DefaultValue, selector } from 'recoil';
import type { Alert } from '../types';
import {
  alertDurationState,
  alertMessageState,
  alertOpenState,
  alertSeverityState,
} from './atoms';

export const alertState = selector<Alert>({
  key: '@alert/alertState',
  get: ({ get }) => {
    const open = get(alertOpenState);
    const message = get(alertMessageState);
    const severity = get(alertSeverityState);
    const duration = get(alertDurationState);

    return { open, message, severity, duration };
  },
  set: ({ set }, newAlertState) => {
    if (newAlertState instanceof DefaultValue) return;

    const { open, message, severity, duration } = newAlertState;

    set(alertOpenState, open);
    set(alertMessageState, message);
    set(alertSeverityState, severity);
    set(alertDurationState, duration);
  },
});
