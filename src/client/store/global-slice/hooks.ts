import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Golfers } from 'src/types';
import { setGolfersState, setToken } from '.';

export const useGlobalState = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    const setAuthToken = (token: string) => dispatch(setToken(token));
    const setGolfersList = (golfers: Golfers) =>
      dispatch(setGolfersState(golfers));

    return { setAuthToken, setGolfersList };
  }, [dispatch]);
};
