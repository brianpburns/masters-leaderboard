import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from '.';

export const useAuthToken = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    const setAuthToken = (token: string) => dispatch(setToken(token));

    return { setAuthToken };
  }, [dispatch]);
};
