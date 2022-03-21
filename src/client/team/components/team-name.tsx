import { ClickAwayListener, TextField } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import React, { useState } from 'react';
import { IconWrapper, NameWrapper } from './styled';

interface Props {
  name: string;
  nameUpdate: (name: string) => void;
}

export const TeamName = ({ name, nameUpdate }: Props) => {
  const [tempName, setTempName] = useState(name);
  const [editMode, setEditMode] = useState(false);

  const handleNameChange = (newName: string) => {
    nameUpdate(newName);
    setEditMode(false);
  };

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
    <NameWrapper>
      {name}
      <IconWrapper>
        <EditIcon
          fontSize='small'
          onClick={() => setEditMode(true)}
          data-testid='edit-name-btn'
        />
      </IconWrapper>
    </NameWrapper>
  );
};
