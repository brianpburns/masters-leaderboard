import React from 'react';
import { useRecoilValue } from 'recoil';
import { TableBody } from '@material-ui/core';

import { entrantsState } from '../../api/state/atoms';
import { PrimaryRow } from './primary-row';

export const TableContent = () => {
  const entrantsData = useRecoilValue(entrantsState);

  return (
    <TableBody>
      {entrantsData.map((row, id) => (
        <PrimaryRow key={row.name} position={id} row={row} />
      ))}
    </TableBody>
  );
};
