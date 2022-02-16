import React from 'react';
import styled from 'styled-components';
import RemoveIcon from '@material-ui/icons/Remove';

import { Golfers } from '../../../types';

import { StyledIcon } from './styled';

interface Props {
  allGolfers: Golfers;
  selectedGolferIds: number[];
  removeGolfer: (golferId: number) => void;
}

const StyledList = styled.ul`
  padding: 0;
`;

const StyledGolfer = styled.li`
  display: flex;
  padding-left: 5px;
  background-color: green;
  color: white;
`;

export const TeamList = ({
  allGolfers,
  selectedGolferIds,
  removeGolfer,
}: Props) => {
  return (
    <StyledList data-testid='selected-golfers-list'>
      {selectedGolferIds.map((golferId, i) => (
        <StyledGolfer key={i}>
          {allGolfers[golferId].name}
          <StyledIcon
            onClick={() => removeGolfer(golferId)}
            data-testid='remove-golfer'
          >
            <RemoveIcon fontSize='small' />
          </StyledIcon>
        </StyledGolfer>
      ))}
    </StyledList>
  );
};
