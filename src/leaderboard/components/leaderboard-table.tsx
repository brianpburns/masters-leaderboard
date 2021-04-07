import React from 'react';
import { TableHead, TableRow, TableCell, Table } from '@material-ui/core';

import { TableContent } from './table-content';
import { StyledTableContainer } from './styled';

export const LeaderboardTable = () => (
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
      <TableContent />
    </Table>
  </StyledTableContainer>
);
