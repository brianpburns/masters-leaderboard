import { FilledInput, FormControlLabel, IconButton } from '@mui/material';
import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
  width: 100%;
`;

export const StyledIconButton = styled(IconButton)`
  padding: 5px !important;
`;

export const StyledSearchBar = styled(FilledInput)`
  width: 100%;
  background-color: white !important;

  input {
    padding: 5px;
  }
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
  margin: 0 !important;
  span {
    padding: 0 5px 0 0;
    font-size: 14px;
    font-family: Source Sans Pro;
  }
`;

export const FiltersContainer = styled.div`
  display: grid;
  margin-top: 5px;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 650px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const GolfersListContainer = styled.div`
  background-color: white;
  width: 50%;
  border-radius: 10px;
  padding: 10px;
  height: fit-content;
`;

export const StyledGolfersList = styled.ul<{ disabled?: boolean }>`
  border: 1px solid silver;
  border-radius: 2px;
  padding: 0;
  margin: 10px 0;
  ${({ disabled }) => disabled && `background: rgba(0,0,0,0.09);`};

  li:last-child {
    border-bottom: none;
  }
`;

export const RemainingPicks = styled.div<{ noPicksLeft: boolean }>`
  font-size: 14px;
  width: 100%;
  max-width: fit-content;
  ${({ noPicksLeft }) => noPicksLeft && 'color: red'};
`;
