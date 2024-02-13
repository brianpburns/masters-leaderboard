import { TableBody as MTableBody } from '@mui/material';
import React from 'react';
import { useAddPrizeMoney } from '../hooks/use-add-prize-money';
import { RowContainer } from './row-container';

export const TableBody = () => {
  const tableData = useAddPrizeMoney();

  return (
    <MTableBody>
      {tableData.map((row, id) => (
        <RowContainer key={id} position={id} row={row} />
      ))}
    </MTableBody>
  );
};
