import { Button, FilledInput } from '@material-ui/core';
import styled from 'styled-components';

export const TeamPageContainer = styled.div`
  padding: 25px;
  height: 100vh;
  display: flex;
`;

export const StyledIcon = styled.div`
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
  ${({ disabled }) => disabled && `background: rgba(0,0,0,0.09);`};

  li:last-child {
    border-bottom: none;
  }
`;

export const GolferListItem = styled.li`
  display: flex;
  padding: 2px;
  padding-left: 5px;
  border-bottom: 1px solid silver;
`;

export const TeamContainer = styled.div`
  background-color: white;
  margin-left: 15px;
  width: 50%;
  height: fit-content;
  border-radius: 10px;
  padding: 10px;
`;

export const NameWrapper = styled.div`
  display: flex;
  text-transform: capitalize;
  font-size: 24px;
  font-weight: 300;
`;

export const RemainingPicks = styled.div<{ noPicksLeft: boolean }>`
  font-size: 14px;
  width: 100%;
  text-align: end;
  margin-bottom: 5px;
  ${({ noPicksLeft }) => noPicksLeft && 'color: red'};
`;

export const AlreadySelectedMsg = styled.div`
  margin-left: auto;
  font-size: 14px;
  color: red;
`;

export const StyledSearchBar = styled(FilledInput)`
  width: 100%;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  text-align: end;
`;

export const CancelButton = styled(Button)`
  margin-left: 5px !important;
`;
