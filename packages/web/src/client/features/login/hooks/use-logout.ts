import { googleLogout } from '@react-oauth/google';
import { useHistory } from 'react-router-dom';
import { useGlobalAction } from '../../../store';

export const useLogout = () => {
  const { setAuthToken } = useGlobalAction();
  const history = useHistory();

  return () => {
    googleLogout();
    setAuthToken(null);
    localStorage.removeItem('authToken');
    history.push('leaderboard');
  };
};
