import React from 'react';
import { TeamType } from 'src/types';
import { TableBody as MTableBody } from '@material-ui/core';
import { PrimaryRow } from './primary-row';

interface Props {
  tableData: TeamType[];
}

export const TableBody = ({ tableData }: Props) => (
  <MTableBody>
    {tableData.map((row, id) => (
      <PrimaryRow key={row.name} position={id} row={row} />
    ))}
  </MTableBody>
);
