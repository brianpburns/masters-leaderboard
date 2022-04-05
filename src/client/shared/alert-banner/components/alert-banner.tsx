import React from 'react';
import { Snackbar } from '@mui/material';
import { AlertSeverity } from '../types';
import Alert from '@mui/material/Alert';

interface Props {
  open: boolean;
  close: () => void;
  message: string;
  severity: AlertSeverity;
  duration?: number;
}

export const AlertBanner = ({
  open,
  close,
  message,
  severity,
  duration = 3000,
}: Props) => (
  <Snackbar open={open} autoHideDuration={duration} onClose={close}>
    <Alert severity={severity}>{message}</Alert>
  </Snackbar>
);
