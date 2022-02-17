import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

import EditIcon from '@material-ui/icons/Edit';
import { useRecoilState } from 'recoil';
import { teamNameState } from '../state/atoms';
import { Icon } from 'src/client/shared';
import { StyledIcon, NameWrapper } from './styled';

export const TeamName = () => {
  const [teamName, setTeamName] = useRecoilState(teamNameState);
  const [tempName, setTempName] = useState(teamName);
  const [editMode, setEditMode] = useState(false);

  const handleNameChange = (newName: string) => {
    setTeamName(newName);
    setEditMode(false);
  };

  return editMode ? (
    <TextField
      id='standard'
      label='Team Name'
      defaultValue={teamName}
      onBlur={(e) => handleNameChange(e.currentTarget.value)}
      onChange={(e) => setTempName(e.currentTarget.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') handleNameChange(tempName);
      }}
    />
  ) : (
    <NameWrapper>
      {teamName}
      <StyledIcon>
        <Icon color='black' size='16'>
          <EditIcon
            fontSize='small'
            onClick={() => setEditMode(true)}
            data-testid='edit-name-btn'
          />
        </Icon>
      </StyledIcon>
    </NameWrapper>
  );
};
