import React from 'react';

import { BodyContainer } from './body-container';
import { StyledTableContainer } from './styled';
import { useLoadTeams } from 'src/client/api';
import { Loader } from 'src/client/shared';
import { Table, TableCell, TableHead, TableRow } from '@mui/material';

export const Leaderboard = () => {
  // Needs to be done here to pull in any team changes
  const { loading } = useLoadTeams();

  return (
    <StyledTableContainer>
      <Loader open={loading} />
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell size='small' />
            <TableCell size='small'>Pos</TableCell>
            <TableCell align='left'>Name</TableCell>
            <TableCell align='left'>Owner</TableCell>
            <TableCell align='left'>Money</TableCell>
          </TableRow>
        </TableHead>
        <BodyContainer />
      </Table>
    </StyledTableContainer>
  );
};
