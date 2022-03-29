import { Remove } from '@mui/icons-material';
import React from 'react';
import { useGetGolferData } from 'src/client/data/hooks/use-get-golfer-data';
import { GolferListItem, IconWrapper, StyledGolfersList } from './styled';

interface Props {
  selectedGolferIds: number[];
  removeGolfer: (golferId: number) => void;
}

export const SelectedGolfersList = ({
  selectedGolferIds,
  removeGolfer,
}: Props) => {
  const { getGolferData } = useGetGolferData();
  return (
    <StyledGolfersList data-testid='selected-golfers-list'>
      {selectedGolferIds.map((golferId, i) => {
        const golferData = getGolferData(golferId.toString());

        // TODO: Remove once test data is wiped. Handles cases where golfer IDs from last year are used.
        if (!golferData) return;

        const { first_name, last_name } = golferData;

        return (
          <GolferListItem key={i} selected={true}>
            {`${first_name} ${last_name}`}
            <IconWrapper
              onClick={() => removeGolfer(golferId)}
              data-testid='remove-golfer'
            >
              <Remove fontSize='small' />
            </IconWrapper>
          </GolferListItem>
        );
      })}
    </StyledGolfersList>
  );
};
