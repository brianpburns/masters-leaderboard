import { Button } from '@mui/material';
import isEqual from 'lodash/isEqual';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useDeleteTeam } from 'src/client/api/hooks/use-delete-team';
import { useSendAlert } from 'src/client/shared';
import { useUpdateTeam } from '../../api';
import { golfersState } from '../../api';
import { useManageGolfers } from '../hooks/use-manage-golfers';
import { savedGolfersIdsRefState, teamGolfersIdsState } from '../state/atoms';
import { teamState } from '../state/selectors';
import { SelectedGolfersList } from './selected-golfers-list';
import { ButtonsContainer, CancelButton, TeamContainer } from './styled';
import { TeamName } from './team-name';

export const TeamSection = () => {
  const allGolfers = useRecoilValue(golfersState);
  const [pickedGolfers, setPickedGolfers] = useRecoilState(teamGolfersIdsState);
  const [refGolfers, setRefGolfers] = useRecoilState(savedGolfersIdsRefState);
  const { removeGolfer } = useManageGolfers();
  const updateTeam = useUpdateTeam();
  const deleteTeam = useDeleteTeam();
  const [teamDetails, setTeamDetails] = useRecoilState(teamState);
  const sendAlert = useSendAlert();

  const onSave = () => {
    updateTeam(teamDetails);
    setRefGolfers(pickedGolfers);
  };

  const handleNameUpdate = (newName: string) => {
    updateTeam({ ...teamDetails, name: newName });
    setTeamDetails({ ...teamDetails, name: newName });
  };

  const noChanges = isEqual(refGolfers, pickedGolfers);

  const handleCancel = () => {
    setPickedGolfers(refGolfers);
    sendAlert('Discarded Changes', 'info');
  };

  return (
    <TeamContainer>
      <TeamName name={teamDetails.name} nameUpdate={handleNameUpdate} />
      <SelectedGolfersList
        allGolfers={allGolfers}
        selectedGolferIds={pickedGolfers}
        removeGolfer={removeGolfer}
      />
      <ButtonsContainer>
        <Button
          size='small'
          variant='contained'
          color='primary'
          onClick={onSave}
          disabled={noChanges}
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
        <button onClick={() => deleteTeam(teamDetails.id)}>Delete</button>
      </ButtonsContainer>
    </TeamContainer>
  );
};
