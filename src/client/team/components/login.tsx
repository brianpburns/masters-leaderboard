import React from 'react';
import { LoginContainer, StyledGoogleButton } from './styled';

interface Props {
  signIn: () => void;
}

export const Login = ({ signIn }: Props) => (
  <LoginContainer>
    <StyledGoogleButton onClick={signIn} label='Sign In' />
  </LoginContainer>
);
