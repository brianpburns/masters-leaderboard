import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGetTeam } from 'src/client/api';
import { selectPhaseSelection } from 'src/client/store';
import { AvailableGolfersList } from '../../available-golfers/components/available-golfers';
import { useLogin } from '../../login/hooks/use-login';
import { Loader } from '../../shared';
import { SelectedTeam } from './selected-team';
import { TeamPageContainer } from './styled';

export const TeamPage = () => {
  const selectionPhase = useSelector(selectPhaseSelection);
  const { finishedSignIn } = useLogin();
  const { loading, fetchTeam } = useGetTeam();

  useEffect(() => {
    const fetchData = async () => fetchTeam();

    if (finishedSignIn) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finishedSignIn]);

  return (
    <TeamPageContainer>
      <Loader open={!finishedSignIn || loading} />
      {finishedSignIn && (
        <>
          {selectionPhase && <AvailableGolfersList />}
          <SelectedTeam />
        </>
      )}
    </TeamPageContainer>
  );
};
