import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { selectionPhaseState } from 'src/client/app';
import { useGetGolferData } from 'src/client/data/hooks/use-get-golfer-data';
import { useManageGolfers } from '../hooks/use-manage-golfers';
import { teamGolfersIdsState } from '../state/atoms';
import { GolfersListItem } from './golfers-list-item';
import { SearchBar } from './search-bar';
import {
  GolfersListContainer,
  RemainingPicks,
  StyledGolfersList,
} from './styled';

export const AvailableGolfersList = () => {
  const { unselectedGolfers, addGolfer } = useManageGolfers();
  const { search } = useGetGolferData();
  const selectedGolferIds = useRecoilValue(teamGolfersIdsState);
  const [searchTerm, setSearchTerm] = useState<string>('Name');
  const selectionPhase = useRecoilValue(selectionPhaseState);

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
        Picks left: {remainingPicks}
      </RemainingPicks>
      <StyledGolfersList disabled={remainingPicks === 0}>
        {filteredGolfersList.map((golfer, i) => {
          return (
            <GolfersListItem
              key={i}
              golfer={golfer}
              availableView={true}
              onIconClick={handleAddGolfer}
              selectionPhase={selectionPhase}
            />
          );
        })}
      </StyledGolfersList>
    </GolfersListContainer>
  );
};
