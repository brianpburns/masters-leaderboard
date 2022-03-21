import React from 'react';
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  useGoogleLogin,
} from 'react-google-login';
import { useRecoilState } from 'recoil';
import { Login } from 'src/client/login';
import { googleConfig } from 'src/client/login/google-config';
import { tokenState } from 'src/client/login/state/atoms';
import { Loader } from 'src/client/shared';
import { TeamPageContainer } from './styled';
import { TeamContent } from './team-content';

export const TeamPage = () => {
  const [token, setToken] = useRecoilState(tokenState);

  const responseGoogle = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    if ('tokenId' in response) setToken(response.tokenId);
  };

  const { signIn, loaded } = useGoogleLogin({
    clientId: googleConfig.clientId,
    onSuccess: responseGoogle,
    onFailure: responseGoogle,
    isSignedIn: true,
  });

  return (
    <TeamPageContainer>
      <Loader open={!loaded} />
      {loaded && (token ? <TeamContent /> : <Login signIn={signIn} />)}
    </TeamPageContainer>
  );
};
