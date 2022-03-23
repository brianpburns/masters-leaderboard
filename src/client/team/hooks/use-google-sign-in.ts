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

  const responseGoogle = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    if ('tokenId' in response) setToken(response.tokenId);
    if (callback) callback();
  };

  const { signIn, loaded } = useGoogleLogin({
    clientId: googleConfig.clientId,
    onSuccess: responseGoogle,
    onFailure: responseGoogle,
    isSignedIn,
  });

  return { token, signIn, loaded };
};
