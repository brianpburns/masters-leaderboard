import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { useEffect, useState } from 'react';
import { useGlobalAction } from 'src/store';

export const useLogin = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const { setAuthToken } = useGlobalAction();

  useEffect(() => {
    const silentSignIn = async () => {
      const userInfo = await GoogleSignin.signInSilently();

      if (userInfo.idToken) {
        console.log('silently signed in');
        setAuthToken(userInfo.idToken);
        setSignedIn(true);
        setLoading(false);
      }
    };

    silentSignIn();
  });

  const signIn = async () => {
    try {
      setLoading(true);
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      // setState
      console.log('userInfo', userInfo);
      setAuthToken(userInfo.idToken);
      setSignedIn(true);
      setLoading(false);
    } catch (err: unknown) {
      const error = err as { code: string };

      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('SIGN_IN_CANCELLED');
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('IN_PROGRESS');
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('PLAY_SERVICES_NOT_AVAILABLE');
        // play services not available or outdated
      } else {
        // some other error happened
        console.log('other error');
      }
    }
  };

  return { signIn, signedIn, loading };
};
