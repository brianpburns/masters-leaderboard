import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { makeStyles } from '@material-ui/core/styles';
import { TableRow, TableCell } from '@material-ui/core';

import { Team } from '../../../types';
import { SubTable } from './sub-table';
import { displayNumber } from '../utils/display-number';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

interface Props {
  position: number;
  row: Team;
}

export const PrimaryRow = ({ position, row }: Props) => {
  const [open, setOpen] = useState(false);
  const classes = useRowStyles();

  return (
    <>
      <TableRow
        className={classes.root}
        onClick={() => setOpen(!open)}
        hover={true}
        selected={open}
      >
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{position + 1}</TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{displayNumber(row.prizeMoney || 0)}</TableCell>
      </TableRow>
      <SubTable isOpen={open} row={row} />
    </>
  );
};
