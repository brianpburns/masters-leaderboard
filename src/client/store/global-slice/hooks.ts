import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '.';
import { selectPhaseSelection, selectAuthToken } from './selectors';

export const useAuthToken = () => {
  const dispatch = useDispatch();
  const authToken = useSelector(selectAuthToken);

  return useMemo(() => {
    const setAuthToken = (token: string) => dispatch(setToken(token));

    return { authToken, setAuthToken };
  }, [authToken, dispatch]);
};
