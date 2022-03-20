import { DefaultValue, selector } from 'recoil';
import type { AlertSeverity } from '../types';
import { alertMessageState, alertOpenState, alertSeverityState } from './atoms';

type Alert = {
  open: boolean;
  message: string;
  severity: AlertSeverity;
};

export const alertState = selector<Alert>({
  key: '@alert/alertState',
  get: ({ get }) => {
    const open = get(alertOpenState);
    const message = get(alertMessageState);
    const severity = get(alertSeverityState);

    return { open, message, severity };
  },
  set: ({ set }, newAlertState) => {
    if (newAlertState instanceof DefaultValue) return;

    const { open, message, severity } = newAlertState;

    set(alertOpenState, open);
    set(alertMessageState, message);
    set(alertSeverityState, severity);
  },
});
