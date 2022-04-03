import React from 'react';
import { useGetGolferData } from 'src/client/data/hooks/use-get-golfer-data';
import { GolfersListItem } from './golfers-list-item';
import { StyledGolfersList } from './styled';

interface Props {
  selectedGolferIds: number[];
  removeGolfer: (golferId: number) => void;
  selectionPhase: boolean;
}

export const SelectedGolfersList = ({
  selectedGolferIds,
  removeGolfer,
  selectionPhase,
}: Props) => {
  const { getGolferData } = useGetGolferData();
  return (
    <StyledGolfersList data-testid='selected-golfers-list'>
      {selectedGolferIds.map((golferId, i) => {
        const golfer = getGolferData(golferId.toString());

        return (
          golfer && (
            <GolfersListItem
              key={i}
              golfer={golfer}
              availableView={false}
              onIconClick={removeGolfer}
              selectionPhase={selectionPhase}
            />
          )
        );
      })}
    </StyledGolfersList>
  );
};
