import { useSetRecoilState } from 'recoil';
import { alertState } from '../state/selectors';
import { AlertSeverity } from '../types';

export const useSendAlert = () => {
  const setAlertState = useSetRecoilState(alertState);

  const sendAlert = (message: string, severity: AlertSeverity) => {
    setAlertState({
      open: true,
      message,
      severity,
    });
  };

  return sendAlert;
};
