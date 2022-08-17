import { useAlertState } from '../state/hooks';
import { AlertSeverity } from '../types';

export const useSendAlert = () => {
  const { setAlert } = useAlertState();

  const sendAlert = (
    message: string,
    severity: AlertSeverity,
    duration = 3000
  ) => {
    setAlert({
      open: true,
      message,
      severity,
      duration,
    });
  };

  return sendAlert;
};
