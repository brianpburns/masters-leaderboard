import React from 'react';
import RemoveIcon from '@material-ui/icons/Remove';

import { Golfers } from '../../../types';

import { GolferListItem, StyledGolfersList, StyledIcon } from './styled';

interface Props {
  allGolfers: Golfers;
  selectedGolferIds: number[];
  removeGolfer: (golferId: number) => void;
}

export const TeamList = ({
  allGolfers,
  selectedGolferIds,
  removeGolfer,
}: Props) => {
  return (
    <StyledGolfersList data-testid='selected-golfers-list'>
      {selectedGolferIds.map((golferId, i) => (
        <GolferListItem key={i}>
          {allGolfers[golferId].name}
          <StyledIcon
            onClick={() => removeGolfer(golferId)}
            data-testid='remove-golfer'
          >
            <RemoveIcon fontSize='small' />
          </StyledIcon>
        </GolferListItem>
      ))}
    </StyledGolfersList>
  );
};
