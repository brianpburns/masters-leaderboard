import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { TeamState } from '../types';
import {
  addGolferId,
  removeGolferId,
  setGolferIds,
  setGolfersRef,
  setTeam,
} from './current-team-slice';

export const useSetCurrentTeam = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    const setCurrentTeam = (team: TeamState) => dispatch(setTeam(team));

    return { setCurrentTeam };
  }, [dispatch]);
};

export const useCurrentTeamGolferIds = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    const addGolfer = (id: number) => dispatch(addGolferId(id));
    const removeGolfer = (id: number) => dispatch(removeGolferId(id));
    const setGolfers = (ids: number[]) => dispatch(setGolferIds(ids));

    return { addGolfer, removeGolfer, setGolfers };
  }, [dispatch]);
};

export const useCurrentTeamGolfersRef = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    const setGolferIdsRef = (ids: number[]) => dispatch(setGolfersRef(ids));

    return { setGolferIdsRef };
  }, [dispatch]);
};
