import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGetTeam } from 'src/client/api';
import { Loader } from 'src/client/features/shared';
import { selectPhaseSelection } from 'src/client/store';
import { Login } from '../../login/components/login';
import { useGoogleSignIn } from '../../login/hooks/use-google-sign-in';
import { AvailableGolfersList } from './available-golfers-list/available-golfers-list';
import { SelectedTeam } from './selected-team/selected-team';
import { TeamPageContainer } from './styled';

export const TeamPage = () => {
  const { authToken, loaded, signIn, error } = useGoogleSignIn(true);
  const selectionPhase = useSelector(selectPhaseSelection);
  const { loading, fetchTeam } = useGetTeam();

  const signInSuccess = loaded && !error;
  const showLogin = (signInSuccess && !authToken) || error;

  useEffect(() => {
    const fetchData = async () => fetchTeam();

    if (signInSuccess) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signInSuccess]);

  return (
    <TeamPageContainer>
      <Loader open={!loaded && !error} />
      {error && <p>Oops there was an error loading the page</p>}
      {signInSuccess && authToken && (
        <>
          <Loader open={loading} />
          {selectionPhase && <AvailableGolfersList />}
          <SelectedTeam />
        </>
      )}
      {showLogin && <Login signIn={signIn} />}
    </TeamPageContainer>
  );
};
