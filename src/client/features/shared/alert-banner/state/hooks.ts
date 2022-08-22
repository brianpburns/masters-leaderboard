import { useDispatch, useSelector } from 'react-redux';
import { AlertState, setAlertState } from './alert-slice';
import { alertSelector } from './selectors';

export const useAlertState = () => {
  const dispatch = useDispatch();
  const alert = useSelector(alertSelector);

  const setAlert = (newAlert: AlertState) => dispatch(setAlertState(newAlert));

  return { alert, setAlert };
};
