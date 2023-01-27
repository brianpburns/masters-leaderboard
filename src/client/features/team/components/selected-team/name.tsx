import { Edit } from '@mui/icons-material';
import { ClickAwayListener, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useUpdateTeam } from 'src/client/api';
import { selectPhaseSelection } from 'src/client/store';
import { useSetCurrentTeam } from '../../state/hooks';
import { selectCurrentTeam } from '../../state/selectors';
import { EditIconWrapper, NameWrapper } from '../styled';

export const Name = () => {
  const currentTeam = useSelector(selectCurrentTeam);
  const [tempName, setTempName] = useState(currentTeam.name);
  const [editMode, setEditMode] = useState(false);
  const updateTeam = useUpdateTeam();
  const { setCurrentTeam } = useSetCurrentTeam();
  const selectionPhase = useSelector(selectPhaseSelection);

  const handleNameChange = (newName: string) => {
    updateTeam({ ...currentTeam, name: newName });
    setCurrentTeam({ ...currentTeam, name: newName });
    setEditMode(false);
  };

  return editMode ? (
    <ClickAwayListener onClickAway={() => handleNameChange(tempName)}>
      <TextField
        id='standard'
        label='Team Name'
        defaultValue={currentTeam.name}
        onBlur={() => handleNameChange(tempName)}
        onChange={(e) => setTempName(e.currentTarget.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleNameChange(tempName);
        }}
      />
    </ClickAwayListener>
  ) : (
    <NameWrapper onClick={() => setEditMode(true)}>
      {currentTeam.name}
      {selectionPhase && (
        <EditIconWrapper>
          <Edit fontSize='small' data-testid='edit-name-btn' />
        </EditIconWrapper>
      )}
    </NameWrapper>
  );
};
