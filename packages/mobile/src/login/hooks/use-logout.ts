import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useGlobalAction } from 'src/store';

export const useLogout = () => {
  const { setAuthToken } = useGlobalAction();

  return async () => {
    await GoogleSignin.signOut();
    setAuthToken(null);
  };
};
