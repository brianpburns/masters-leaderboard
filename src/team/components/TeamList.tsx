import React from 'react';
import styled from 'styled-components';
import RemoveIcon from '@material-ui/icons/Remove';

import { Golfers } from '../../types/types';

const StyledTeamList = styled.div`
  background-color: white;
  margin-left: 15px;
  max-width: 400px;
  width: 100%;
  height: 100px;
  border-radius: 10px;
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

export const TeamList = ({
  allGolfers,
  selectedGolferIds,
  updateGolfers,
}: Props) => {
  const clickHandler = (id: string) => {
    console.log('removed');
    updateGolfers(selectedGolferIds.filter((golferId) => golferId !== id));
  };
  return (
    <StyledTeamList>
      {selectedGolferIds.map((golferId, i) => (
        <StyledGolfer key={i}>
          {allGolfers[golferId].name}
          <StyledIcon onClick={() => clickHandler(golferId)}>
            <RemoveIcon fontSize="small" />
          </StyledIcon>
        </StyledGolfer>
      ))}
    </StyledTeamList>
  );
};
