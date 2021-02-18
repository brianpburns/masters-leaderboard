import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';

interface Props {
  teamName: string;
  setTeamName: (name: string) => void;
}

const StyledName = styled.div``;

export const TeamName = ({ teamName, setTeamName }: Props) => {
  const [editMode, setEditMode] = useState(false);
  const [tempName, setTempName] = useState(teamName);

  const handleNameChange = (newName: string) => {
    setTeamName(newName);
    setEditMode(false);
  };

  return (
    <>
      {editMode ? (
        <TextField
          id="standard"
          label="Team Name"
          defaultValue={teamName}
          onBlur={(e) => handleNameChange(e.currentTarget.value)}
          onChange={(e) => setTempName(e.currentTarget.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleNameChange(tempName);
          }}
        />
      ) : (
        <StyledName>
          {teamName}
          <EditIcon fontSize="small" onClick={() => setEditMode(true)} />
        </StyledName>
      )}
    </>
  );
};
