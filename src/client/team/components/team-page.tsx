import React from 'react';
// import { useGoogleLogin } from 'react-google-login';
import { useRecoilValue } from 'recoil';
import { Login } from 'src/client/login';
// import { googleConfig } from 'src/client/login/google-config';
import { tokenState } from 'src/client/login/state/atoms';
import { TeamPageContainer } from './styled';
import { TeamContent } from './team-content';

export const TeamPage = () => {
  const token = useRecoilValue(tokenState);
  // Not working with Snowpack. Unknown import bug.
  // const { loaded } = useGoogleLogin({ clientId: googleConfig.clientId });

  return (
    <TeamPageContainer>{token ? <TeamContent /> : <Login />}</TeamPageContainer>
  );
};
