import React from 'react';

import { googleLoginUrl } from '../google-config';
import { GoogleIcon } from '../icons';
import {
  LoginButtonContainer,
  LoginContainer,
  LoginIconWrapper,
  StyledLoginButton,
} from './styled';

export const Login = () => {
  return (
    <LoginContainer>
      <LoginButtonContainer>
        <StyledLoginButton href={googleLoginUrl} underline='none'>
          <LoginIconWrapper active={true}>
            <GoogleIcon />
          </LoginIconWrapper>
          <span>Login with Google</span>
        </StyledLoginButton>
      </LoginButtonContainer>
    </LoginContainer>
  );
};
