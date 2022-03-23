import React from 'react';
import { TableRow, IconButton, TableCell } from '@mui/material';
import { displayNumber } from '../utils/display-number';
import { Team } from 'src/types';
import styled from 'styled-components';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

interface Props {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
  position: number;
  row: Team;
}

const StyledTableCell = styled(TableCell)`
  border-bottom: unset !important;
`;

export const PrimaryRow = ({ open, setOpen, position, row }: Props) => (
  <TableRow onClick={() => setOpen(!open)} hover={true} selected={open}>
    <StyledTableCell>
      <IconButton aria-label='expand row' size='small'>
        {open ? (
          <KeyboardArrowUp data-testid='toggle-up' />
        ) : (
          <KeyboardArrowDown data-testid='toggle-down' />
        )}
      </IconButton>
    </StyledTableCell>
    <StyledTableCell>{position + 1}</StyledTableCell>
    <StyledTableCell>{row.name}</StyledTableCell>
    <StyledTableCell>{displayNumber(row.prizeMoney || 0)}</StyledTableCell>
  </TableRow>
);
