import { GoogleLogin } from '@react-oauth/google';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { selectAuthToken, useAppSelector } from 'src/client/store';
import styled from 'styled-components';
import { Loader } from '../../shared';
import { useLogin } from '../hooks/use-login';

const LoginContainer = styled.div`
  margin: auto;
  width: fit-content;
  margin-top: 50px;
`;

export const Login = () => {
  const { finishedSignIn, onSuccess, onError } = useLogin(false);
  const history = useHistory();
  const authToken = useAppSelector(selectAuthToken);

  useEffect(() => {
    if (authToken) {
      history.push('team');
    }
  }, [authToken, history]);

  if (!finishedSignIn) {
    return <Loader open={true} />;
  }

  return (
    <LoginContainer data-testid="google-login-button">
      <GoogleLogin onSuccess={onSuccess} onError={onError} />
    </LoginContainer>
  );
};
