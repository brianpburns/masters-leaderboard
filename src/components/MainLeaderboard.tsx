import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { generateLeaderboard } from '../util/requests';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Row } from './Row';

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

export const initialState = [
  {
    id: 0,
    name: '',
    players_ids: [0],
    prizeMoney: 0,
    players: [
      {
        id: '',
        name: '',
        position: '',
        prizeMoney: 0,
        teetime: '',
        thru: '',
        today: '',
        topar: 0,
      },
    ],
  },
];

export const MainLeaderboard = () => {
  const [leaderboard, setLeaderboard] = useState(initialState);
  useEffect(() => {
    const fetchData = async () => {
      const result = await generateLeaderboard();
      setLeaderboard(result);
    };

    fetchData();
  }, []);

  return (
    <Container>
      <StyledLogo>
        <img src="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/augusta-masters-2019/d05d1861-masters-logo-masters-gimp_0ds03p0dq03p000000001.png" />
      </StyledLogo>
      <StyledTableContainer>
        <StyledTable aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell size="small" />
              <TableCell size="small">Pos</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Money</TableCell>
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
