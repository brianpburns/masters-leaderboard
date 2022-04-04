import { useState } from 'react';
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  useGoogleLogin,
} from 'react-google-login';
import { useRecoilState } from 'recoil';
import { googleConfig } from 'src/client/login/google-config';
import { tokenState } from 'src/client/login/state/atoms';

export const useGoogleSignIn = (isSignedIn: boolean, callback?: () => void) => {
  const [token, setToken] = useRecoilState(tokenState);
  const [error, setError] = useState(false);

  const handleResponse = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    console.log('useGoogleSignIn response', response);
    console.log('client ID', googleConfig.clientId);
    if ('tokenId' in response) {
      setToken(response.tokenId);
      if (callback) callback();
    } else {
      setError(true);
    }
  };

  const { signIn, loaded } = useGoogleLogin({
    clientId: googleConfig.clientId,
    onSuccess: handleResponse,
    onFailure: handleResponse,
    isSignedIn,
    scope: 'profile',
    cookiePolicy: 'single_host_origin',
  });

  return { token, signIn, loaded, error };
};
