import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';
import { useRecoilValue } from 'recoil';

import { golfersState } from '../../app';
import { displayNumber } from '../utils/display-number';
import { useGolferPrizeMoney } from '../hooks/use-golfer-money';

interface Props {
  golferId: number;
}

const displayToPar = (value: number) => {
  if (value === 0) return 'E';

  return value > 0 ? `+${value}` : value;
};

export const SubRow = ({ golferId }: Props) => {
  const golfers = useRecoilValue(golfersState);
  const golfer = golfers[golferId];
  const getPrizeMoney = useGolferPrizeMoney();

  return (
    <TableRow key={golferId}>
      <TableCell component='th' scope='row'>
        {golfer.position === 0 ? '-' : golfer.position}
      </TableCell>
      <TableCell>{golfer.name}</TableCell>
      <TableCell>{displayToPar(golfer.topar)}</TableCell>
      <TableCell>{golfer.thru}</TableCell>
      <TableCell>{golfer.today}</TableCell>
      <TableCell>{displayNumber(getPrizeMoney(golferId))}</TableCell>
    </TableRow>
  );
};
