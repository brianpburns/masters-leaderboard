import { useState } from 'react';
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  useGoogleLogin,
} from 'react-google-login';
import { googleConfig } from 'src/client/config';
import {
  selectAuthToken,
  useAppSelector,
  useAuthToken,
} from 'src/client/store';

type GoogleResponse = GoogleLoginResponse | GoogleLoginResponseOffline;

export const useGoogleSignIn = (isSignedIn: boolean, callback?: () => void) => {
  const [error, setError] = useState(false);

  const { setAuthToken } = useAuthToken();
  const authToken = useAppSelector(selectAuthToken);

  const handleResponse = (response: GoogleResponse) => {
    if (!('tokenId' in response)) {
      setError(true);
      return;
    }

    setAuthToken(response.tokenId);

    if (callback) callback();
  };

  const { signIn, loaded } = useGoogleLogin({
    clientId: googleConfig.clientId,
    onSuccess: handleResponse,
    onFailure: handleResponse,
    isSignedIn,
    scope: 'profile',
    cookiePolicy: 'single_host_origin',
  });

  return { authToken, signIn, loaded, error };
};
