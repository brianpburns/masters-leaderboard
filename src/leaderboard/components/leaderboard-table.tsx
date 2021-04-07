import React from 'react';
import { TableHead, TableRow, TableCell } from '@material-ui/core';

import { TableContent } from './table-content';
import { StyledTable, StyledTableContainer } from './styled';

export const LeaderboardTable = () => (
  <StyledTableContainer>
    <StyledTable aria-label='collapsible table'>
      <TableHead>
        <TableRow>
          <TableCell size='small' />
          <TableCell size='small'>Pos</TableCell>
          <TableCell align='left'>Name</TableCell>
          <TableCell align='left'>Money</TableCell>
        </TableRow>
      </TableHead>
      <TableContent />
    </StyledTable>
  </StyledTableContainer>
);
