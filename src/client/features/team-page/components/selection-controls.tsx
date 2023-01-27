import { Button } from '@mui/material';
import { isEqual } from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';
import { useUpdateTeam } from 'src/client/api';
import { useDeleteTeam } from 'src/client/api/hooks/use-delete-team';
import { useGetGolferData } from 'src/client/data/hooks/use-get-golfer-data';
import { useAppSelector } from 'src/client/store';
import { useManageGolfers, useSendAlert } from '../../shared';
import { useCurrentTeamGolfersRef } from '../state/hooks';
import { selectCurrentTeam, selectGolfersSavedRef } from '../state/selectors';
import { ButtonsContainer, CancelButton, Error } from './styled';

export const SelectionControls = () => {
  const { getGolfersData } = useGetGolferData();
  const { selectedGolfers, setGolfers } = useManageGolfers();
  const { golfers, rookieCount, top10Count, amateurCount } =
    getGolfersData(selectedGolfers);
  const deleteTeam = useDeleteTeam();
  const updateTeam = useUpdateTeam();
  const { setGolferIdsRef } = useCurrentTeamGolfersRef();
  const sendAlert = useSendAlert();
  const currentTeam = useSelector(selectCurrentTeam);
  const golfersRef = useAppSelector(selectGolfersSavedRef);

  const noChanges = isEqual(golfersRef, selectedGolfers);

  const pickedGolfers = golfers.length;
  const rookieError = pickedGolfers === 10 && rookieCount === 0;
  const amateurError = pickedGolfers === 10 && amateurCount === 0;
  const top10Error = top10Count > 5;
  const error = rookieError || top10Error;

  const onSave = () => {
    updateTeam(currentTeam);
    setGolferIdsRef(selectedGolfers);
  };

  const handleCancel = () => {
    setGolfers(golfersRef);
    sendAlert('Discarded Changes', 'info');
  };

  return (
    <>
      {amateurError && <Error>Amateur hour. You need at least 1.</Error>}
      {rookieError && <Error>Rookie error. You need at least 1.</Error>}
      {top10Error && <Error>You can only have 5 of the top 10 players.</Error>}
      <ButtonsContainer>
        <Button
          size='small'
          variant='contained'
          color='primary'
          onClick={onSave}
          disabled={noChanges || error}
        >
          Save
        </Button>
        <CancelButton
          size='small'
          variant='contained'
          color='secondary'
          onClick={handleCancel}
          disabled={noChanges}
        >
          Cancel
        </CancelButton>
        <button onClick={() => deleteTeam(currentTeam.id)}>Delete</button>
      </ButtonsContainer>
      <p>Rules:</p>
      <ul>
        <li>10 players</li>
        <li>1 rookie</li>
        <li>1 amateur</li>
        <li>Maximum of 5 of the top 10 players</li>
      </ul>
    </>
  );
};
