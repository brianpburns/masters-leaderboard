import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { AlertState, setAlertState } from './alert-slice';

export const useAlertState = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    return (newAlert: AlertState) => dispatch(setAlertState(newAlert));
  }, [dispatch]);
};
