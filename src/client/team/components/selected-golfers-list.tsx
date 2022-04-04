import React from 'react';
import { Player } from 'src/types';
import { GolfersListItem } from './golfers-list-item';
import { StyledGolfersList } from './styled';

interface Props {
  selectedGolfers: Player[];
  removeGolfer: (golferId: number) => void;
  selectionPhase: boolean;
}

export const SelectedGolfersList = ({
  selectedGolfers,
  removeGolfer,
  selectionPhase,
}: Props) => {
  return (
    <StyledGolfersList data-testid='selected-golfers-list'>
      {selectedGolfers.map((golfer) => (
        <GolfersListItem
          key={golfer.id}
          golfer={golfer}
          availableView={false}
          onIconClick={removeGolfer}
          selectionPhase={selectionPhase}
        />
      ))}
    </StyledGolfersList>
  );
};
