import React, { useState } from 'react';
import type {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import { useSetRecoilState } from 'recoil';
import { tokenState } from '../state/atoms';
import { Login } from './login';

export const LoginContainer = () => {
  const setToken = useSetRecoilState(tokenState);
  const [loggingIn, setLoggingIn] = useState(true);

  const responseGoogle = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    if ('tokenId' in response) {
      setToken(response.tokenId);
    }
    setLoggingIn(false);
  };

  // TODO: Implement failure flow

  return <Login loggingIn={loggingIn} responseGoogle={responseGoogle} />;
};
