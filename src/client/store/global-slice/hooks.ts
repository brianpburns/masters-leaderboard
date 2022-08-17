import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '.';
import { selectionPhaseSelector, tokenSelector } from './selectors';

export const useAuthToken = () => {
  const dispatch = useDispatch();
  const authToken = useSelector(tokenSelector);

  const setAuthToken = (token: string) => dispatch(setToken(token));

  return { authToken, setAuthToken };
};

export const useSelectionPhase = () => {
  const selectionPhase = useSelector(selectionPhaseSelector);

  return { selectionPhase };
};
