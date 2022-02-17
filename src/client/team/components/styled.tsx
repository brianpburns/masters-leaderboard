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
  width: 33%;
  border-radius: 10px;
  padding: 10px;
  height: fit-content;
`;

export const SearchBar = styled.div`
  background-color: red;
  width: 100%;
`;

export const StyledGolfersList = styled.ul`
  border: 1px solid silver;
  border-radius: 2px;
  padding: 0;

  li:last-child {
    border-bottom: none;
  }
`;

export const GolferListItem = styled.li`
  display: flex;
  padding: 2px;
  padding-left: 5px;
  background-color: white;
  border-bottom: 1px solid silver;
`;

export const TeamContainer = styled.div`
  background-color: white;
  margin-left: 15px;
  width: 33%;
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
