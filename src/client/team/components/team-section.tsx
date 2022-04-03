import { Button } from '@mui/material';
import React from 'react';
import { useGetGolferData } from 'src/client/data/hooks/use-get-golfer-data';
import { Team } from 'src/types';
import { SelectedGolfersList } from './selected-golfers-list';
import { TeamContainer, ButtonsContainer, CancelButton, Error } from './styled';
import { TeamName } from './team-name';

interface Props {
  teamDetails: Team;
  handleNameUpdate: (newName: string) => void;
  selectionPhase: boolean;
  selectedGolferIds: number[];
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
  selectedGolferIds,
  removeGolfer,
  onSave,
  handleCancel,
  noChanges,
  deleteTeam,
}: Props) => {
  const { getGolfersData } = useGetGolferData();
  const { golfers, rookieCount, top10Count } =
    getGolfersData(selectedGolferIds);

  const pickedGolfers = golfers.length;
  const rookieError = pickedGolfers === 10 && rookieCount < 2;
  const top10Error = top10Count > 5;
  const error = rookieError || top10Error;

  return (
    <TeamContainer>
      <TeamName
        name={teamDetails.name}
        nameUpdate={handleNameUpdate}
        selectionPhase={selectionPhase}
      />
      <SelectedGolfersList
        selectedGolfers={golfers}
        removeGolfer={removeGolfer}
        selectionPhase={selectionPhase}
      />
      {selectionPhase && (
        <>
          {rookieError && <Error>You must have at least 2 rookies!</Error>}
          {top10Error && (
            <Error>You can only have 5 of the top 10 players!</Error>
          )}
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
              disabled={noChanges || error}
            >
              Cancel
            </CancelButton>
            <button onClick={() => deleteTeam(teamDetails.id)}>Delete</button>
          </ButtonsContainer>
          <p>Rules:</p>
          <ul>
            <li>10 players</li>
            <li>2 rookies</li>
            <li>Maximum of 5 of the top 10 players</li>
          </ul>
        </>
      )}
    </TeamContainer>
  );
};
