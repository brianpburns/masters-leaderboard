import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';

import { useManageGolfers } from '../hooks/use-manage-golfers';
import {
  GolfersListContainer,
  GolferListItem,
  StyledIcon,
  StyledGolfersList,
  RemainingPicks,
} from './styled';
import { Icon } from 'src/client/shared';
import { useRecoilValue } from 'recoil';
import { teamGolfersIdsState } from '../state/atoms';
import { SearchBar } from './search-bar';

export const GolfersList = () => {
  const { availableGolfers, addGolfer } = useManageGolfers();
  const selectedGolferIds = useRecoilValue(teamGolfersIdsState);
  const [searchTerm, setSearchTerm] = useState<string>('Name');

  const remainingPicks = 10 - selectedGolferIds.length;

  const handleAddGolfer = (id: number) => {
    if (remainingPicks === 0) return;
    addGolfer(id);
  };

  return (
    <GolfersListContainer data-testid='golfers-list'>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <RemainingPicks>Remaining picks: {remainingPicks}</RemainingPicks>
      <StyledGolfersList disabled={remainingPicks === 0}>
        {availableGolfers.map((golfer, i) => (
          <GolferListItem key={i}>
            {golfer.name}
            {remainingPicks !== 0 && (
              <StyledIcon
                onClick={() => handleAddGolfer(golfer.id)}
                data-testid='add-golfer'
              >
                <Icon color='black'>
                  <AddIcon fontSize='small' />
                </Icon>
              </StyledIcon>
            )}
          </GolferListItem>
        ))}
      </StyledGolfersList>
    </GolfersListContainer>
  );
};
