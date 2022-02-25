import {
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import React from 'react';
import { SubRow } from './sub-row';

interface Props {
  isOpen: boolean;
  rankedGolfers: number[];
}

export const SubTable = ({ isOpen, rankedGolfers }: Props) => {
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
              {rankedGolfers.map((id: number) => (
                <SubRow key={id} golferId={id} />
              ))}
            </TableBody>
          </Table>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};
