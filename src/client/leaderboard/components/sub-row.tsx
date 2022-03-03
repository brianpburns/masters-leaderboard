import { TableCell, TableRow } from '@material-ui/core';
import React from 'react';
import { GolferData } from 'src/types';

interface Props {
  golfer: GolferData;
  prizeMoney: string;
}

const displayToPar = (value: number) => {
  if (value === 0) return 'E';

  return value > 0 ? `+${value}` : value;
};

export const SubRow = ({ golfer, prizeMoney }: Props) => (
  <TableRow key={golfer.id}>
    <TableCell component='th' scope='row'>
      {golfer.position === 0 ? '-' : golfer.position}
    </TableCell>
    <TableCell>{golfer.name}</TableCell>
    <TableCell>{displayToPar(golfer.topar)}</TableCell>
    <TableCell>{golfer.thru}</TableCell>
    <TableCell>{golfer.today}</TableCell>
    <TableCell>{prizeMoney}</TableCell>
  </TableRow>
);
