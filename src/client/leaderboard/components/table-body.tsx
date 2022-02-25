import React from 'react';
import { TeamType } from 'src/types';
import { TableBody as MTableBody } from '@material-ui/core';
import { RowContainer } from './row-container';

interface Props {
  tableData: TeamType[];
}

export const TableBody = ({ tableData }: Props) => (
  <MTableBody>
    {tableData.map((row, id) => (
      <RowContainer key={row.name} position={id} row={row} />
    ))}
  </MTableBody>
);
