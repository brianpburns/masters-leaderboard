import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';

interface Props {
  teamName: string;
  handleNameChange: (name: string) => void;
}

export const EditName = ({ teamName, handleNameChange }: Props) => {
  const [tempName, setTempName] = useState(teamName);

  return (
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
  );
};
