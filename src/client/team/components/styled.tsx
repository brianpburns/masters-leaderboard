import {
  Button,
  FilledInput,
  FormControlLabel,
  IconButton,
} from '@mui/material';
import styled from 'styled-components';

export const TeamPageContainer = styled.div`
  padding: 10px;
  display: flex;
`;

export const IconWrapper = styled.div<{ top10: boolean; amateur: boolean }>`
  display: flex;
  margin-left: auto;
  cursor: pointer;

  p {
    margin: 0;
    color: ${({ top10, amateur }) =>
      top10 ? '#e9c70d' : amateur ? 'orange' : 'darkgreen'};
  }
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

export const GolferListItemContainer = styled.li<{ selected: boolean }>`
  display: flex;
  padding: 2px;
  padding-left: 5px;
  border-bottom: 1px solid silver;
  padding-top: 2px;
  padding-bottom: 2px;

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
  max-width: fit-content;
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

export const FiltersContainer = styled.div`
  display: grid;
  margin-top: 5px;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 650px) {
    grid-template-columns: repeat(4, 1fr);
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

export const FlagWrapper = styled.div`
  margin-right: 5px;

  img {
    width: 15px;
    height: 10px;
  }
`;

export const Error = styled.p`
  color: #ff3e51;
  font-size: 14px;
  margin-top: 4px;
`;
