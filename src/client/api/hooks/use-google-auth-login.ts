import { useRecoilValue } from 'recoil';
import { tokenState } from 'src/client/login/state/atoms';
import { googleAuthLogin } from '../fetch/google-auth-login';

export const useGoogleAuthLogin = () => {
  const token = useRecoilValue(tokenState);

  const googleLogin = async () => {
    try {
      await googleAuthLogin(token);
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(
          `Failed Google auth login. Error message: ${err.message}`
        );
      }
    }
  };

  return googleLogin;
};
