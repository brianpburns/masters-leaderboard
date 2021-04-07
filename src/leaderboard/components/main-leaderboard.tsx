import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Row } from './row';
import { useRecoilValue } from 'recoil';
import { entrantsState } from '../../api/state/atoms';

const Container = styled.div`
  width: 100%;
  max-width: 700px;
  justify-self: center;
  margin: 50px;
  border-radius: 25px;
`;

const StyledLogo = styled.div`
  display: flex;
  max-height: 80px;
  background-color: white;
  border-radius: 25px 25px 0px 0px;
  img {
    max-height: 80px;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
`;

const StyledTable = styled(Table)`
  border-radius: 25px;
`;

const StyledTableContainer = styled(TableContainer)`
  background-color: white;
  border-radius: 0px 0px 25px 25px;
`;

const mastersLogoSrc =
  'http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/augusta-masters-2019/d05d1861-masters-logo-masters-gimp_0ds03p0dq03p000000001.png';

export const MainLeaderboard = () => {
  const leaderboard = useRecoilValue(entrantsState);

  return (
    <Container>
      <StyledLogo>
        <img src={mastersLogoSrc} />
      </StyledLogo>
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
          <TableBody>
            {leaderboard.map((row, id) => (
              <Row key={row.name} position={id} row={row} />
            ))}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
    </Container>
  );
};
