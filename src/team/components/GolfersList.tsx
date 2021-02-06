import React from 'react';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';

import { Golfers } from '../../types/types';

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
  display: flex;
  padding-left: 5px;
  background-color: green;
  color: white;
`;

const StyledIcon = styled.div`
  margin-left: 5px;
`;

interface Props {
  allGolfers: Golfers;
  selectedGolferIds: string[];
  updateGolfers: (golferIds: string[]) => void;
}

export const GolfersList = ({
  allGolfers,
  selectedGolferIds,
  updateGolfers,
}: Props) => {
  const clickHandler = (golferId: string) => {
    console.log('added');
    updateGolfers([...selectedGolferIds, golferId]);
  };

  return (
    <Container>
      <StyledTopBar>
        <div>Search</div>
      </StyledTopBar>
      <StyledList>
        {Object.values(allGolfers)
          .filter((golfer) => !selectedGolferIds.includes(golfer.id))
          .map((golfer, i) => (
            <StyledGolfer key={i}>
              {golfer.name}
              <StyledIcon onClick={() => clickHandler(golfer.id)}>
                <AddIcon fontSize="small" />
              </StyledIcon>
            </StyledGolfer>
          ))}
      </StyledList>
    </Container>
  );
};
