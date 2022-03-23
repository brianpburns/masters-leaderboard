import React from 'react';
import { Remove } from '@mui/icons-material';

import { Golfers } from '../../../types';

import { GolferListItem, StyledGolfersList, IconWrapper } from './styled';

interface Props {
  allGolfers: Golfers;
  selectedGolferIds: number[];
  removeGolfer: (golferId: number) => void;
}

export const SelectedGolfersList = ({
  allGolfers,
  selectedGolferIds,
  removeGolfer,
}: Props) => {
  return (
    <StyledGolfersList data-testid='selected-golfers-list'>
      {selectedGolferIds.map((golferId, i) => (
        <GolferListItem key={i} selected={true}>
          {allGolfers[golferId].name}
          <IconWrapper
            onClick={() => removeGolfer(golferId)}
            data-testid='remove-golfer'
          >
            <Remove fontSize='small' />
          </IconWrapper>
        </GolferListItem>
      ))}
    </StyledGolfersList>
  );
};
