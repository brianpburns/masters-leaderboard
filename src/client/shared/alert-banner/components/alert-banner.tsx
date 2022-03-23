import React from 'react';
import { Snackbar } from '@mui/material';
import { AlertSeverity } from '../types';
import Alert from '@mui/material/Alert';

interface Props {
  open: boolean;
  close: () => void;
  message: string;
  severity: AlertSeverity;
}

export const AlertBanner = ({ open, close, message, severity }: Props) => (
  <Snackbar open={open} autoHideDuration={3000} onClose={close}>
    <Alert severity={severity}>{message}</Alert>
  </Snackbar>
);
