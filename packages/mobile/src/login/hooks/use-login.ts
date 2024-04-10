import { ConfigureParams, GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAuthToken, useGlobalAction } from 'src/store';

const googleConfig: ConfigureParams = {
  iosClientId: '564051064112-pjb0jk68lh2aldca0c2uo4041961er0u.apps.googleusercontent.com',
  webClientId: '564051064112-7ju4dqapders3rts5s8b55p29pcnp16p.apps.googleusercontent.com',
  offlineAccess: true,
};

GoogleSignin.configure(googleConfig);

export const useLogin = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setAuthToken } = useGlobalAction();
  const authToken = useSelector(selectAuthToken);

  useEffect(() => {
    const silentSignIn = async () => {
      try {
        const userInfo = await GoogleSignin.signInSilently();

        if (userInfo.idToken) {
          setAuthToken(userInfo.idToken);
          setSignedIn(true);
          setLoading(false);
          router.replace('/');
        }
      } catch (err: unknown) {
        setAuthToken(null);
        setLoading(false);
      }
    };

    if (!authToken && !loading) {
      silentSignIn();
    }
  });

  const signIn = async () => {
    try {
      setLoading(true);
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      // setState
      setAuthToken(userInfo.idToken);
      setSignedIn(true);
      setLoading(false);
      router.replace('/');
    } catch (err: unknown) {
      setLoading(false);
      const error = err as { code: string };

      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('SIGN_IN_CANCELLED', error);
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('IN_PROGRESS', error);
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('PLAY_SERVICES_NOT_AVAILABLE', error);
        // play services not available or outdated
      } else {
        // some other error happened
        console.log('other error', error);
      }
    }
  };

  return { signIn, signedIn, loading, authToken };
};
