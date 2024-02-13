import React from 'react';
import { useSelector } from 'react-redux';
import { useAlertState } from '../state/hooks';
import { alertSelector } from '../state/selectors';
import { AlertBanner } from './alert-banner';

export const AlertContainer = () => {
  const setAlert = useAlertState();
  const alert = useSelector(alertSelector);
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
