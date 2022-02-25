import styled from 'styled-components';
import { TableCell, TableContainer } from '@material-ui/core';

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
    max-width: fit-content;
  }
`;

export const StyledTableContainer = styled(TableContainer)`
  background-color: white;
  border-radius: 0px 0px 25px 25px;
`;

export const SubTableCell = styled(TableCell)`
  padding-left: 0 !important;
  padding-right: 0 !important;
`;
