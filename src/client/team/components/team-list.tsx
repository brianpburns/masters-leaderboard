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

const StyledGolfer = styled.div`
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
    <>
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
    </>
  );
};
