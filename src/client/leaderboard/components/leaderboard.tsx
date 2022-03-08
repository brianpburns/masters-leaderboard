import React from 'react';
import { TableHead, TableRow, TableCell, Table } from '@material-ui/core';

import { BodyContainer } from './body-container';
import { StyledTableContainer } from './styled';

export const Leaderboard = () => (
  <StyledTableContainer>
    <Table aria-label='collapsible table'>
      <TableHead>
        <TableRow>
          <TableCell size='small' />
          <TableCell size='small'>Pos</TableCell>
          <TableCell align='left'>Name</TableCell>
          <TableCell align='left'>Money</TableCell>
        </TableRow>
      </TableHead>
      <BodyContainer />
    </Table>
  </StyledTableContainer>
);
