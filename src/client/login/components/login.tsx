import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import type {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import { googleConfig } from '../google-config';
import { LoginButtonContainer, LoginContainer } from './styled';
import { useSetRecoilState } from 'recoil';
import { tokenState } from '../state/atoms';
import { useGoogleAuthLogin } from 'src/client/api/hooks/use-google-auth-login';
import { Loader } from 'src/client/shared';

export const Login = () => {
  const setToken = useSetRecoilState(tokenState);
  const [loggingIn, setLoggingIn] = useState(true);
  const googleLogin = useGoogleAuthLogin();

  const responseGoogle = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    if ('tokenId' in response) {
      setToken(response.tokenId);
    }
    setLoggingIn(false);
  };

  // TODO: Implement failure flow

  return (
    <LoginContainer>
      <Loader open={loggingIn} />
      <LoginButtonContainer>
        <GoogleLogin
          clientId={googleConfig.clientId}
          buttonText='Login'
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          isSignedIn={true}
        />
        <button onClick={googleLogin}>Google Auth Test</button>
      </LoginButtonContainer>
    </LoginContainer>
  );
};
