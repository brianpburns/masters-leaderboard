import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import { GolferData } from 'src/types';
import { displayToPar } from '../utils/display-to-par';

interface Props {
  golfer: GolferData;
  prizeMoney: string;
}

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
