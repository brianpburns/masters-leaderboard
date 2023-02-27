import { Button } from '@mui/material';
import styled from 'styled-components';

export const TeamPageContainer = styled.div`
  padding: 10px;
  display: flex;
`;

export const GolferListItem = styled.li<{ selected: boolean }>`
  display: flex;
  padding: 2px;
  padding-left: 5px;
  border-bottom: 1px solid silver;
  padding-top: 5px;
  padding-bottom: 5px;

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

export const ButtonsContainer = styled.div`
  width: 100%;
  text-align: end;
`;

export const CancelButton = styled(Button)`
  margin-left: 5px !important;
`;

export const EditIconWrapper = styled.div`
  margin-left: 5px;
  cursor: pointer;
`;

export const Error = styled.p`
  color: #ff3e51;
  font-size: 14px;
  margin-top: 4px;
`;
