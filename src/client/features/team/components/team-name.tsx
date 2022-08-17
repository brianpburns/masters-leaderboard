import { ClickAwayListener, TextField } from '@mui/material';
import { Edit } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { EditIconWrapper, NameWrapper } from './styled';

interface Props {
  name: string;
  nameUpdate: (name: string) => void;
  selectionPhase: boolean;
}

export const TeamName = ({ name, nameUpdate, selectionPhase }: Props) => {
  const [tempName, setTempName] = useState('');
  const [editMode, setEditMode] = useState(false);

  const handleNameChange = (newName: string) => {
    nameUpdate(newName);
    setEditMode(false);
  };

  useEffect(() => {
    setTempName(name);
  }, [name]);

  return editMode ? (
    <ClickAwayListener onClickAway={() => handleNameChange(tempName)}>
      <TextField
        id='standard'
        label='Team Name'
        defaultValue={name}
        onBlur={() => handleNameChange(tempName)}
        onChange={(e) => setTempName(e.currentTarget.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleNameChange(tempName);
        }}
      />
    </ClickAwayListener>
  ) : (
    <NameWrapper onClick={() => setEditMode(true)}>
      {name}
      {selectionPhase && (
        <EditIconWrapper>
          <Edit fontSize='small' data-testid='edit-name-btn' />
        </EditIconWrapper>
      )}
    </NameWrapper>
  );
};
