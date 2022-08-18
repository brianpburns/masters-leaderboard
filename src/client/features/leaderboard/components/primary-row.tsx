import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { IconButton, TableCell, TableRow } from '@mui/material';
import React from 'react';
import { TeamWithPrizeMoney } from 'src/types';
import styled from 'styled-components';
import { displayNumber } from '../utils/display-number';

interface Props {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
  position: number;
  row: TeamWithPrizeMoney;
  selectionPhase: boolean;
}

const StyledTableCell = styled(TableCell)`
  border-bottom: unset !important;
`;

export const PrimaryRow = ({
  open,
  setOpen,
  position,
  row,
  selectionPhase,
}: Props) => (
  <TableRow onClick={() => setOpen(!open)} hover={true} selected={open}>
    <StyledTableCell>
      {!selectionPhase && (
        <IconButton aria-label='expand row' size='small'>
          {open ? (
            <KeyboardArrowUp data-testid='toggle-up' />
          ) : (
            <KeyboardArrowDown data-testid='toggle-down' />
          )}
        </IconButton>
      )}
    </StyledTableCell>
    <StyledTableCell>{position + 1}</StyledTableCell>
    <StyledTableCell>{row.name}</StyledTableCell>
    <StyledTableCell>{row.owner}</StyledTableCell>
    <StyledTableCell>{displayNumber(row.prizeMoney || 0)}</StyledTableCell>
  </TableRow>
);
