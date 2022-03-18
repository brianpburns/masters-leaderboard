import React from 'react';
import { Button } from '@material-ui/core';
import { useRecoilState, useRecoilValue } from 'recoil';
import isEqual from 'lodash/isEqual';

import { useUpdateTeam } from '../../api';
import { golfersState } from '../../app';
import { useManageGolfers } from '../hooks/use-manage-golfers';
import { savedGolfersIdsRefState, teamGolfersIdsState } from '../state/atoms';
import { teamState } from '../state/selectors';
import { ButtonsContainer, CancelButton, TeamContainer } from './styled';
import { TeamList } from './team-list';
import { TeamName } from './team-name';
import { useDeleteTeam } from 'src/client/api/hooks/use-delete-team';

export const TeamSection = () => {
  const allGolfers = useRecoilValue(golfersState);
  const [pickedGolfers, setPickedGolfers] = useRecoilState(teamGolfersIdsState);
  const [refGolfers, setRefGolfers] = useRecoilState(savedGolfersIdsRefState);
  const { removeGolfer } = useManageGolfers();
  const updateTeam = useUpdateTeam();
  const deleteTeam = useDeleteTeam();
  const teamDetails = useRecoilValue(teamState);

  const onSave = () => {
    updateTeam(teamDetails);
    setRefGolfers(pickedGolfers);
  };

  const noChanges = isEqual(refGolfers, pickedGolfers);

  return (
    <TeamContainer>
      <TeamName />
      <TeamList
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
          onClick={() => setPickedGolfers(refGolfers)}
          disabled={noChanges}
        >
          Cancel
        </CancelButton>
        <button onClick={() => deleteTeam(teamDetails.id)}>Delete</button>
      </ButtonsContainer>
    </TeamContainer>
  );
};
