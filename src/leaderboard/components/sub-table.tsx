import React from 'react';
import {
  TableRow,
  TableCell,
  Collapse,
  Box,
  Table,
  TableHead,
  TableBody,
} from '@material-ui/core';

import { Team } from '../../types';
import { SubRow } from './sub-row';
import { useSortedGolfers } from '../hooks/use-sorted-golfers';

interface Props {
  isOpen: boolean;
  row: Team;
}

export const SubTable = ({ isOpen, row }: Props) => {
  const sortedGolferIds = useSortedGolfers(row);

  return (
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={isOpen} timeout='auto' unmountOnExit>
          <Table size='small' aria-label='purchases' padding='none'>
            <TableHead>
              <TableRow>
                <TableCell>Pos</TableCell>
                <TableCell>Player</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>Thru</TableCell>
                <TableCell>Today</TableCell>
                <TableCell>Money</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedGolferIds.map((id) => (
                <SubRow key={id} golferId={id} />
              ))}
            </TableBody>
          </Table>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};
