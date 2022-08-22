import React from 'react';
import { useAlertState } from '../state/hooks';
import { AlertBanner } from './alert-banner';

export const AlertContainer = () => {
  const { alert, setAlert } = useAlertState();
  const { open, message, severity, duration } = alert;

  const close = () => {
    setAlert({ ...alert, open: false });
  };

  return (
    <AlertBanner
      open={open}
      close={close}
      message={message}
      severity={severity}
      duration={duration}
    />
  );
};
