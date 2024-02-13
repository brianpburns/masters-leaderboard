import styled from 'styled-components';

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

export const FlagWrapper = styled.div`
  margin-right: 5px;

  img {
    width: 15px;
    height: 10px;
  }
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

export const AlreadySelectedMsg = styled.div`
  margin-left: auto;
  font-size: 14px;
  color: red;
`;
