import { TableContainer } from '@mui/material';
import styled from 'styled-components';

export const StyledTableContainer = styled(TableContainer)`
  background-color: white;
`;

export const StyledPlayerType = styled.span<{
  top10: boolean;
  amateur: boolean;
}>`
  color: ${({ top10, amateur }) =>
    top10 ? '#e9c70d' : amateur ? 'orange' : 'darkgreen'};
`;
