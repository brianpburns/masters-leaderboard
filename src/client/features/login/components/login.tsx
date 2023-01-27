import React from 'react';
import GoogleButton from 'react-google-button';
import styled from 'styled-components';

interface Props {
  signIn: () => void;
}

const LoginContainer = styled.div`
  padding: 15px;
  display: flex;
  width: 100%;
  height: 50vh;
`;

const StyledGoogleButton = styled(GoogleButton)`
  margin: auto;
`;

export const Login = ({ signIn }: Props) => (
  <LoginContainer>
    <StyledGoogleButton onClick={signIn} label='Sign In' />
  </LoginContainer>
);
