import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';
import { useRecoilValue } from 'recoil';

import { golfersState } from '../../app';
import { displayNumber } from '../utils/display-number';
import { usePrizeMoney } from '../hooks/use-prize-money';

interface Props {
  golferId: number;
}

export const SubRow = ({ golferId }: Props) => {
  const golfers = useRecoilValue(golfersState);
  const golfer = golfers[golferId];
  const getPrizeMoney = usePrizeMoney();

  return (
    <TableRow key={golferId}>
      <TableCell component='th' scope='row'>
        {golfer.position === 0 ? '-' : golfer.position}
      </TableCell>
      <TableCell>{golfer.name}</TableCell>
      <TableCell>{golfer.topar}</TableCell>
      <TableCell>{golfer.thru}</TableCell>
      <TableCell>{golfer.today}</TableCell>
      <TableCell>{displayNumber(getPrizeMoney(golferId))}</TableCell>
    </TableRow>
  );
};
