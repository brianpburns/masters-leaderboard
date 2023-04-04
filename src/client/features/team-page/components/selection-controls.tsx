import { Button } from '@mui/material';
import { isEqual } from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';
import { useUpdateTeam } from 'src/client/api';
import { useDeleteTeam } from 'src/client/api/hooks/use-delete-team';
import { useGetGolferData } from 'src/client/data/hooks/use-get-golfer-data';
import { useAppSelector } from 'src/client/store';
import { useManageGolfers, useSendAlert } from '../../shared';
import { Tooltip } from '../../shared/components/tooltip';
import { useCurrentTeamGolfersRef } from '../state/hooks';
import { selectCurrentTeam, selectGolfersSavedRef } from '../state/selectors';
import { ButtonsContainer, Error } from './styled';

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
      {top10Error && <Error>Too many top 10 players.</Error>}
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
        <Button
          size='small'
          variant='contained'
          color='secondary'
          onClick={handleCancel}
          disabled={noChanges}
        >
          Cancel
        </Button>
        <button onClick={() => deleteTeam(currentTeam.id)}>Delete</button>
        <Tooltip
          triggerText='Rules'
          tooltipMessage='10 players, max 5 top 10. 1 rookie, 1 amateur.'
        />
      </ButtonsContainer>
    </>
  );
};
