import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Team } from 'src/types';
import { setCutLineState, setTeamsState } from './leaderboard-slice';

export const useTeamState = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    const setTeams = (teams: Team[]) => dispatch(setTeamsState(teams));

    return { setTeams };
  }, [dispatch]);
};

export const useCutLine = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    const setCutLine = (value: number) => dispatch(setCutLineState(value));

    return { setCutLine };
  }, [dispatch]);
};
