import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Team } from 'src/types';
import { setCutLineState, setTeamsState } from './leaderboard-slice';

export const useTeamState = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    return (teams: Team[]) => dispatch(setTeamsState(teams));
  }, [dispatch]);
};

export const useCutLine = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    return (value: number) => dispatch(setCutLineState(value));
  }, [dispatch]);
};
