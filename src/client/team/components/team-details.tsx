import React, { useState } from 'react';

import { useManageGolfers } from '../hooks/use-manage-golfers';
import { useRecoilState, useRecoilValue } from 'recoil';
import { teamNameState, teamGolfersIdsState } from '../state/atoms';
import { TeamList } from './team-list';
import { TeamName } from './team-name';
import { EditName } from './edit-name';
import { golfersState } from '../../app';
import { Button } from '@material-ui/core';
import { useUpdateTeam } from '../../api/hooks/use-update-team';
import { teamState } from '../state/selectors';

export const TeamDetails = () => {
  const allGolfers = useRecoilValue(golfersState);
  const selectedGolferIds = useRecoilValue(teamGolfersIdsState);
  const { removeGolfer } = useManageGolfers();
  const [teamName, setTeamName] = useRecoilState(teamNameState);
  const [editMode, setEditMode] = useState(false);
  const updateTeam = useUpdateTeam();
  const teamDetails = useRecoilValue(teamState);

  const handleNameChange = (newName: string) => {
    setTeamName(newName);
    setEditMode(false);
  };

  const onSave = () => {
    updateTeam(teamDetails);
  };

  return (
    <>
      {editMode ? (
        <EditName teamName={teamName} handleNameChange={handleNameChange} />
      ) : (
        <TeamName teamName={teamName} setEditMode={setEditMode} />
      )}
      <TeamList
        allGolfers={allGolfers}
        selectedGolferIds={selectedGolferIds}
        removeGolfer={removeGolfer}
      />
      <Button onClick={onSave}>Save</Button>
    </>
  );
};
