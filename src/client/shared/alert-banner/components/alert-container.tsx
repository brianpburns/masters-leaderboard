import React from 'react';
import { useRecoilState } from 'recoil';
import { alertState } from '../state/selectors';
import { AlertBanner } from './alert-banner';

export const AlertContainer = () => {
  const [alert, setAlert] = useRecoilState(alertState);
  const { open, message, severity } = alert;

  console.log('alert', alert);

  const close = () => {
    setAlert({ ...alert, open: false });
  };

  return (
    <AlertBanner
      open={open}
      close={close}
      message={message}
      severity={severity}
    />
  );
};
