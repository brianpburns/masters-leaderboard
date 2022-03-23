import React from 'react';
import { TableRow, IconButton, TableCell } from '@material-ui/core';
import { displayNumber } from '../utils/display-number';
import { Team } from 'src/types';
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

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
          <KeyboardArrowUpIcon data-testid='toggle-up' />
        ) : (
          <KeyboardArrowDownIcon data-testid='toggle-down' />
        )}
      </IconButton>
    </StyledTableCell>
    <StyledTableCell>{position + 1}</StyledTableCell>
    <StyledTableCell>{row.name}</StyledTableCell>
    <StyledTableCell>{displayNumber(row.prizeMoney || 0)}</StyledTableCell>
  </TableRow>
);
