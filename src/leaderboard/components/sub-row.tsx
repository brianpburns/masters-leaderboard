import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';
import { useRecoilValue } from 'recoil';

import { prizeMoneyState } from '../../api/state/atoms';
import { golfersState } from '../../app';
import { displayNumber } from '../utils/display-number';

interface Props {
  golferId: number;
}

export const SubRow = ({ golferId }: Props) => {
  const golfers = useRecoilValue(golfersState);
  const prizeMoney = useRecoilValue(prizeMoneyState);
  const player = golfers[golferId];

  return (
    <TableRow key={golferId}>
      <TableCell component='th' scope='row'>
        {player.position}
      </TableCell>
      <TableCell>{player.name}</TableCell>
      <TableCell>{player.topar}</TableCell>
      <TableCell>{player.thru}</TableCell>
      <TableCell>{player.today}</TableCell>
      <TableCell>
        {displayNumber(prizeMoney[player.position].prizeMoney)}
      </TableCell>
    </TableRow>
  );
};
