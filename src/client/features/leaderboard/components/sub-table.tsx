import {
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';
import { SubRowContainer } from './sub-row-container';

interface Props {
  isOpen: boolean;
  rankedGolfers: number[];
}

export const SubTable = ({ isOpen, rankedGolfers }: Props) => (
  <TableRow>
    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
      <Collapse in={isOpen} timeout='auto' unmountOnExit>
        <Table size='small' aria-label='purchases' padding='none'>
          <TableHead>
            <TableRow data-testid='sub-table-row'>
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
              <SubRowContainer key={id} golferId={id} />
            ))}
          </TableBody>
        </Table>
      </Collapse>
    </TableCell>
  </TableRow>
);
