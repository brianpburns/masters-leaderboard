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

import { Entrant } from '../../types';
import { SubRow } from './sub-row';

interface Props {
  isOpen: boolean;
  row: Entrant;
}

export const SubTable = ({ isOpen, row }: Props) => (
  <TableRow>
    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
      <Collapse in={isOpen} timeout='auto' unmountOnExit>
        <Box margin={1}>
          <Table size='small' aria-label='purchases'>
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
              {row.players_ids.map((id) => (
                <SubRow key={id} golferId={id} />
              ))}
            </TableBody>
          </Table>
        </Box>
      </Collapse>
    </TableCell>
  </TableRow>
);
