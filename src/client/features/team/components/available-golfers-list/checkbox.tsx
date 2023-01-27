import { Checkbox as MUICheckbox } from '@mui/material';
import React from 'react';
import { StyledFormControlLabel } from '../styled';

interface Props {
  label: string;
  checked: boolean;
  onClick: (newValue: boolean) => void;
}

export const Checkbox = ({ label, checked, onClick }: Props) => (
  <StyledFormControlLabel
    control={
      <MUICheckbox
        size='small'
        checked={checked}
        onClick={() => onClick(!checked)}
      />
    }
    label={label}
  />
);
