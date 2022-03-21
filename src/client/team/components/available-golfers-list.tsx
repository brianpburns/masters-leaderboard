import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';

import { useManageGolfers } from '../hooks/use-manage-golfers';
import {
  GolfersListContainer,
  GolferListItem,
  IconWrapper,
  StyledGolfersList,
  RemainingPicks,
  AlreadySelectedMsg,
} from './styled';
import { Icon } from 'src/client/shared';
import { useRecoilValue } from 'recoil';
import { teamGolfersIdsState } from '../state/atoms';
import { SearchBar } from './search-bar';

export const AvailableGolfersList = () => {
  const { allGolfers, unselectedGolfers, addGolfer } = useManageGolfers();
  const selectedGolferIds = useRecoilValue(teamGolfersIdsState);
  const [searchTerm, setSearchTerm] = useState<string>('Name');

  const remainingPicks = 10 - selectedGolferIds.length;

  const handleAddGolfer = (id: number) => {
    if (remainingPicks === 0) return;
    addGolfer(id);
  };

  const searchActive = !['Name', ''].includes(searchTerm);
  const filteredGolfersList = searchActive
    ? allGolfers.filter((golfer) =>
        golfer.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : unselectedGolfers;

  return (
    <GolfersListContainer data-testid='golfers-list'>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <RemainingPicks noPicksLeft={remainingPicks === 0}>
        Remaining picks: {remainingPicks}
      </RemainingPicks>
      <StyledGolfersList disabled={remainingPicks === 0}>
        {filteredGolfersList.map((golfer, i) => (
          <GolferListItem key={i} selected={false}>
            {golfer.name}
            {selectedGolferIds.includes(golfer.id) ? (
              <AlreadySelectedMsg>(Already Selected)</AlreadySelectedMsg>
            ) : (
              remainingPicks !== 0 && (
                <IconWrapper
                  onClick={() => handleAddGolfer(golfer.id)}
                  data-testid='add-golfer'
                >
                  <Icon color='black'>
                    <AddIcon fontSize='small' />
                  </Icon>
                </IconWrapper>
              )
            )}
          </GolferListItem>
        ))}
      </StyledGolfersList>
    </GolfersListContainer>
  );
};
