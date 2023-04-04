import {
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';
import { TeamWithPrizeMoney } from 'src/types';
import { useSortedGolfers } from '../hooks/use-sorted-golfers';
import { SubRowContainer } from './sub-row-container';

interface Props {
  isOpen: boolean;
  row: TeamWithPrizeMoney;
}

export const SubTable = ({ isOpen, row }: Props) => {
  const rankedGolfers = useSortedGolfers(row);

  return (
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
};
