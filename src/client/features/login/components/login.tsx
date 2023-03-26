import { GoogleLogin } from '@react-oauth/google';
import React from 'react';
import styled from 'styled-components';
import { useLogin } from '../hooks/use-login';

const LoginContainer = styled.div`
  margin: auto;
  width: fit-content;
  margin-top: 50px;
`;

export const Login = () => {
  const { onSuccess, onError } = useLogin();

  return (
    <LoginContainer>
      <GoogleLogin onSuccess={onSuccess} onError={onError} />
    </LoginContainer>
  );
};
