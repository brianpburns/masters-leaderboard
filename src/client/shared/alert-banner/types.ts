export type AlertSeverity = 'success' | 'error' | 'info';

export type Alert = {
  open: boolean;
  message: string;
  severity: AlertSeverity;
};
