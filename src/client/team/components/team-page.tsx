import React from 'react';
import { useRecoilValue } from 'recoil';
import { selectionPhaseState } from 'src/client/app';
import { Login } from 'src/client/login';
import { Loader } from 'src/client/shared';
import { useGoogleSignIn } from '../hooks/use-google-sign-in';
import { TeamPageContainer } from './styled';
import { TeamContent } from './team-content';

export const TeamPage = () => {
  const { authToken, loaded, signIn, error } = useGoogleSignIn(true);
  const selectionPhase = useRecoilValue(selectionPhaseState);

  const signInSuccess = loaded && !error;
  const showLogin = (signInSuccess && !authToken) || error;

  return (
    <TeamPageContainer>
      <Loader open={!loaded && !error} />
      {error && <p>Oops there was an error loading the page</p>}
      {signInSuccess && authToken && (
        <TeamContent selectionPhase={selectionPhase} />
      )}
      {showLogin && <Login signIn={signIn} />}
    </TeamPageContainer>
  );
};
