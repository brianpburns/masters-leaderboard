import React, { useState } from 'react';
import { Add } from '@mui/icons-material';

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
import { useGetGolferData } from 'src/client/data/hooks/use-get-golfer-data';

export const AvailableGolfersList = () => {
  const { unselectedGolfers, addGolfer } = useManageGolfers();
  const { search } = useGetGolferData();
  const selectedGolferIds = useRecoilValue(teamGolfersIdsState);
  const [searchTerm, setSearchTerm] = useState<string>('Name');

  const remainingPicks = 10 - selectedGolferIds.length;

  const handleAddGolfer = (id: number) => {
    if (remainingPicks === 0) return;
    addGolfer(id);
  };

  const searchActive = !['Name', ''].includes(searchTerm);
  const filteredGolfersList = searchActive
    ? search(searchTerm)
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
            {`${golfer.first_name} ${golfer.last_name}`}
            {selectedGolferIds.includes(parseInt(golfer.id)) ? (
              <AlreadySelectedMsg>(Already Selected)</AlreadySelectedMsg>
            ) : (
              remainingPicks !== 0 && (
                <IconWrapper
                  onClick={() => handleAddGolfer(parseInt(golfer.id))}
                >
                  <Icon color='black'>
                    <Add fontSize='small' />
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
