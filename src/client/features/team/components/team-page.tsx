import React from 'react';
import { useSelector } from 'react-redux';
import { Loader } from 'src/client/features/shared';
import { selectPhaseSelection } from 'src/client/store';
import { useGoogleSignIn } from '../hooks/use-google-sign-in';
import { Login } from './login';
import { TeamPageContainer } from './styled';
import { TeamContent } from './team-content';

export const TeamPage = () => {
  const { authToken, loaded, signIn, error } = useGoogleSignIn(true);
  const selectionPhase = useSelector(selectPhaseSelection);

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
