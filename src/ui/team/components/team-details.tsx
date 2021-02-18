import React, { useState } from 'react';

import { useSelectedGolfers } from '../hooks/useSelectedGolfers';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedGolfersState, teamNameState } from '../state/selectors';
import { TeamList } from './team-list';
import { TeamName } from './team-name';
import { EditName } from './edit-name';

export const TeamDetails = () => {
  const selectedGolfers = useRecoilValue(selectedGolfersState);
  const { removeGolfer } = useSelectedGolfers();
  const [teamName, setTeamName] = useRecoilState(teamNameState);
  const [editMode, setEditMode] = useState(false);

  const handleNameChange = (newName: string) => {
    setTeamName(newName);
    setEditMode(false);
  };

  return (
    <>
      {editMode ? (
        <EditName teamName={teamName} handleNameChange={handleNameChange} />
      ) : (
        <TeamName teamName={teamName} setEditMode={setEditMode} />
      )}
      <TeamList selectedGolfers={selectedGolfers} removeGolfer={removeGolfer} />
    </>
  );
};
