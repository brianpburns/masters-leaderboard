import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { router } from 'expo-router';
import { useGlobalAction } from 'src/store';

export const useLogout = () => {
  const { setAuthToken } = useGlobalAction();

  return async () => {
    await GoogleSignin.signOut();
    setAuthToken(null);
    router.replace('/login');
  };
};
