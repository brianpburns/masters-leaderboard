import { Button } from '@mui/material';
import GoogleButton from 'react-google-button';
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

export const AlreadySelectedMsg = styled.div`
  margin-left: auto;
  font-size: 14px;
  color: red;
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

export const LoginContainer = styled.div`
  padding: 15px;
  display: flex;
  width: 100%;
  height: 50vh;
`;

export const StyledGoogleButton = styled(GoogleButton)`
  margin: auto;
`;
