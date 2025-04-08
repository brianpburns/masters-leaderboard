import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { GolferMoneyRankings, GolferScores } from 'src/types';
import { setGolferRankings, setGolfersState, setSelectionPhaseState, setToken } from '.';

export const useGlobalAction = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    const setAuthToken = (token: string | null) => {
      if (token) {
        const tokenData = {
          token,
          timestamp: Date.now(),
        };
        localStorage.setItem('authToken', JSON.stringify(tokenData));
      }
      dispatch(setToken(token));
    };
    const setGolfersList = (golfers: GolferScores) => dispatch(setGolfersState(golfers));
    const setGolferMoneyRankings = (golfers: GolferMoneyRankings) => dispatch(setGolferRankings(golfers));
    const setSelectionPhase = (selectionPhase: boolean) => dispatch(setSelectionPhaseState(selectionPhase));

    return { setAuthToken, setGolfersList, setGolferMoneyRankings, setSelectionPhase };
  }, [dispatch]);
};
