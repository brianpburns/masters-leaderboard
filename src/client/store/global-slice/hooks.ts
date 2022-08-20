import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { GolferMoneyRankings, Golfers } from 'src/types';
import { setGolferRankings, setGolfersState, setToken } from '.';

export const useGlobalAction = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    const setAuthToken = (token: string) => dispatch(setToken(token));
    const setGolfersList = (golfers: Golfers) =>
      dispatch(setGolfersState(golfers));
    const setGolferMoneyRankings = (golfers: GolferMoneyRankings) =>
      dispatch(setGolferRankings(golfers));

    return { setAuthToken, setGolfersList, setGolferMoneyRankings };
  }, [dispatch]);
};
