import { Button } from '@mui/material';
import React from 'react';
import { useGetGolferData } from 'src/client/data/hooks/use-get-golfer-data';
import { TeamState } from '../types';
import { SelectedGolfersList } from './selected-golfers-list';
import { ButtonsContainer, CancelButton, Error, TeamContainer } from './styled';
import { TeamName } from './team-name';

interface Props {
  teamDetails: TeamState;
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
  const { golfers, rookieCount, top10Count, amateurCount } =
    getGolfersData(selectedGolferIds);

  const pickedGolfers = golfers.length;
  const rookieError = pickedGolfers === 10 && rookieCount === 0;
  const amateurError = pickedGolfers === 10 && amateurCount === 0;
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
          {amateurError && <Error>Amateur hour. You need at least 1.</Error>}
          {rookieError && <Error>Rookie error. You need at least 1.</Error>}
          {top10Error && (
            <Error>You can only have 5 of the top 10 players.</Error>
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
              disabled={noChanges}
            >
              Cancel
            </CancelButton>
            {/* <button onClick={() => deleteTeam(teamDetails.id)}>Delete</button> */}
          </ButtonsContainer>
          <p>Rules:</p>
          <ul>
            <li>10 players</li>
            <li>1 rookie</li>
            <li>1 amateur</li>
            <li>Maximum of 5 of the top 10 players</li>
          </ul>
        </>
      )}
    </TeamContainer>
  );
};
