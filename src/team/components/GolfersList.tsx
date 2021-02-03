import React from 'react';
import styled from 'styled-components';
import { GolferData } from '../../types/types';

const Container = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 10px;
  padding: 10px;
`;

const StyledTopBar = styled.div`
  background-color: red;
  width: 100%;
`;

const StyledList = styled.div`
  background-color: blue;
  padding: 5px;
`;

const StyledGolfer = styled.div`
  background-color: green;
  color: white;
`;

interface Props {
  golfers: { [id: string]: GolferData };
}

export const GolfersList = ({ golfers }: Props) => {
  return (
    <Container>
      <StyledTopBar>
        <div>Search</div>
      </StyledTopBar>
      <StyledList>
        {Object.values(golfers).map((golfer, i) => (
          <StyledGolfer key={i}>{golfer.name}</StyledGolfer>
        ))}
      </StyledList>
    </Container>
  );
};
