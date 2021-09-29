import React from 'react';
import { useRecoilValue } from 'recoil';
import { TableBody } from '@material-ui/core';

import { entrantsState } from '../../api/state/atoms';
import { PrimaryRow } from './primary-row';
import { Team } from '../../types';

export const prizeMoneySortKey = (a: Team, b: Team) =>
  a.prizeMoney < b.prizeMoney ? 1 : -1;

export const TableContent = () => {
  const entrantsData = useRecoilValue(entrantsState);
  const sortedData = entrantsData.slice().sort(prizeMoneySortKey);

  return (
    <TableBody>
      {sortedData.map((row, id) => (
        <PrimaryRow key={row.name} position={id} row={row} />
      ))}
    </TableBody>
  );
};
