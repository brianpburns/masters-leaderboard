import React from 'react';
import { Team } from 'src/types';
import { TableBody as MTableBody } from '@mui/material';
import { RowContainer } from './row-container';

interface Props {
  tableData: Team[];
}

export const TableBody = ({ tableData }: Props) => (
  <MTableBody>
    {tableData.map((row, id) => (
      <RowContainer key={row.name} position={id} row={row} />
    ))}
  </MTableBody>
);
