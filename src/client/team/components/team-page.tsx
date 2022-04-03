import React from 'react';
import { useRecoilValue } from 'recoil';
import { selectionPhaseState } from 'src/client/app';
import { Login } from 'src/client/login';
import { Loader } from 'src/client/shared';
import { useGoogleSignIn } from '../hooks/use-google-sign-in';
import { TeamPageContainer } from './styled';
import { TeamContent } from './team-content';

export const TeamPage = () => {
  const { token, loaded, signIn } = useGoogleSignIn(true);
  const selectionPhase = useRecoilValue(selectionPhaseState);

  return (
    <TeamPageContainer>
      <Loader open={!loaded} />
      {loaded &&
        (token ? (
          <TeamContent selectionPhase={selectionPhase} />
        ) : (
          <Login signIn={signIn} />
        ))}
    </TeamPageContainer>
  );
};
