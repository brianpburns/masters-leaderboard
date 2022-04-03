import { Button } from '@mui/material';
import React from 'react';
import { Team } from 'src/types';
import { SelectedGolfersList } from './selected-golfers-list';
import { TeamContainer, ButtonsContainer, CancelButton } from './styled';
import { TeamName } from './team-name';

interface Props {
  teamDetails: Team;
  handleNameUpdate: (newName: string) => void;
  selectionPhase: boolean;
  pickedGolfers: number[];
  removeGolfer: (golferId: number) => void;
  onSave: () => void;
  handleCancel: () => void;
  noChanges: boolean;
  deleteTeam: (id: number) => void;
}

export const TeamSection = ({
  teamDetails,
  handleNameUpdate,
  selectionPhase,
  pickedGolfers,
  removeGolfer,
  onSave,
  handleCancel,
  noChanges,
  deleteTeam,
}: Props) => {
  return (
    <TeamContainer>
      <TeamName
        name={teamDetails.name}
        nameUpdate={handleNameUpdate}
        selectionPhase={selectionPhase}
      />
      <SelectedGolfersList
        selectedGolferIds={pickedGolfers}
        removeGolfer={removeGolfer}
        selectionPhase={selectionPhase}
      />
      {selectionPhase && (
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
      )}
    </TeamContainer>
  );
};
