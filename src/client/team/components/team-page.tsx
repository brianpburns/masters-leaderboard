import React from 'react';
import { Login } from 'src/client/login';
import { Loader } from 'src/client/shared';
import { useGoogleSignIn } from '../hooks/use-google-sign-in';
import { TeamPageContainer } from './styled';
import { TeamContent } from './team-content';

export const TeamPage = () => {
  const { token, loaded, signIn } = useGoogleSignIn();

  return (
    <TeamPageContainer>
      <Loader open={!loaded} />
      {loaded && (token ? <TeamContent /> : <Login signIn={signIn} />)}
    </TeamPageContainer>
  );
};
