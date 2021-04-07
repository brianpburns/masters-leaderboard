import styled from 'styled-components';
import { Table, TableContainer } from '@material-ui/core';

export const LeaderboardContainer = styled.div`
  width: 100%;
  max-width: 700px;
  justify-self: center;
  margin: 50px;
  border-radius: 25px;
`;

export const StyledLogo = styled.div`
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

export const StyledTable = styled(Table)`
  border-radius: 25px;
`;

export const StyledTableContainer = styled(TableContainer)`
  background-color: white;
  border-radius: 0px 0px 25px 25px;
`;
