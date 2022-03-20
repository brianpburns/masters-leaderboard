import { Container } from '@material-ui/core';
import React from 'react';
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import { Loader } from 'src/client/shared';
import { googleConfig } from '../google-config';
import { ButtonContainer } from './styled';

interface Props {
  loggingIn: boolean;
  responseGoogle: (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => void;
}

export const Login = ({ loggingIn, responseGoogle }: Props) => (
  <Container>
    <Loader open={loggingIn} />
    <ButtonContainer>
      <GoogleLogin
        clientId={googleConfig.clientId}
        buttonText='Login'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        isSignedIn={true}
      />
    </ButtonContainer>
  </Container>
);
