import { Button, FilledInput, IconButton } from '@mui/material';
import styled from 'styled-components';

export const TeamPageContainer = styled.div`
  padding: 10px;
  display: flex;
`;

export const IconWrapper = styled.div`
  margin-left: auto;
  cursor: pointer;
`;

export const GolfersListContainer = styled.div`
  background-color: white;
  width: 50%;
  border-radius: 10px;
  padding: 10px;
  height: fit-content;
`;

export const SearchBarWrapper = styled.div`
  width: 100%;
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

export const GolferListItem = styled.li<{ selected: boolean }>`
  display: flex;
  padding: 2px;
  padding-left: 5px;
  border-bottom: 1px solid silver;

  &:hover {
    background-color: ${({ selected }) => (selected ? '#f89898' : '#b1e7a9')};
  }
`;

export const TeamContainer = styled.div`
  background-color: white;
  width: 50%;
  height: fit-content;
  border-radius: 10px;
  padding: 10px;
`;

export const NameWrapper = styled.div`
  display: flex;
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 300;
`;

export const RemainingPicks = styled.div<{ noPicksLeft: boolean }>`
  font-size: 14px;
  width: 100%;
  text-align: end;
  margin: 5px 0;
  ${({ noPicksLeft }) => noPicksLeft && 'color: red'};
`;

export const AlreadySelectedMsg = styled.div`
  margin-left: auto;
  font-size: 14px;
  color: red;
`;

export const StyledSearchBar = styled(FilledInput)`
  width: 100%;
  background-color: white !important;

  input {
    padding: 5px;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  text-align: end;
`;

export const CancelButton = styled(Button)`
  margin-left: 5px !important;
`;

export const StyledIconButton = styled(IconButton)`
  padding: 5px !important;
`;

export const EditIconWrapper = styled.div`
  margin-left: 5px;
  cursor: pointer;
`;
