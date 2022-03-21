import { ClickAwayListener, TextField } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import React, { useEffect, useState } from 'react';
import { EditIconWrapper, NameWrapper } from './styled';

interface Props {
  name: string;
  nameUpdate: (name: string) => void;
}

export const TeamName = ({ name, nameUpdate }: Props) => {
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
      <EditIconWrapper>
        <EditIcon fontSize='small' data-testid='edit-name-btn' />
      </EditIconWrapper>
    </NameWrapper>
  );
};
