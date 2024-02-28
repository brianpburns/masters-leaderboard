import styled from 'styled-components/native';

export const GolferListItem = styled.View<{ selected: boolean }>`
  align-self: stretch;
  text-align: center;
  display: flex;
  flex-direction: row;
  padding: 2px;
  padding-left: 5px;
  border-bottom: 1px solid silver;
  padding-top: 5px;
  padding-bottom: 5px;

  &:hover {
    background-color: ${({ selected }) => (selected ? '#f89898' : '#b1e7a9')};
  }
`;
