import React from 'react';
import { useRecoilValue } from 'recoil';
import { TableBody } from '@material-ui/core';

import { teamsState } from '../../api/state/atoms';
import { PrimaryRow } from './primary-row';
import { Team } from '../../../types';

export const prizeMoneySortKey = (a: Team, b: Team) =>
  (a.prizeMoney || 0) < (b.prizeMoney || 0) ? 1 : -1;

export const TableContent = () => {
  const teamsData = useRecoilValue(teamsState);
  const sortedData = teamsData.slice().sort(prizeMoneySortKey);

  return (
    <TableBody>
      {sortedData.map((row, id) => (
        <PrimaryRow key={row.name} position={id} row={row} />
      ))}
    </TableBody>
  );
};
