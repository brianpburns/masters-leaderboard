import styled from 'styled-components/native';

export const StyledText = styled.Text`
  color: red;
`;

export const GolferListItem = styled.View<{ selected: boolean }>`
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

export const FlagWrapper = styled.View`
  margin-right: 5px;
  /* background: blue; */
  width: 20px;
  height: 20px;

  img {
    width: 15px;
    height: 10px;
  }
`;

export const GolfersFlatList = styled.View<{ disabled: boolean }>`
  border: 1px solid silver;
  border-radius: 2px;
  padding: 0;
  margin: 10px 0;
  ${({ disabled }) => disabled && `background: rgba(0,0,0,0.09);`};

  li:last-child {
    border-bottom: none;
  }
`;
