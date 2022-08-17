import React from 'react';
import { useRecoilValue } from 'recoil';
import { useGetGolferData } from 'src/client/data/hooks/use-get-golfer-data';
import { useSelectionPhase } from 'src/client/store/global-slice/hooks';
import { useFilter } from '../hooks/use-filter';
import { useManageGolfers } from '../hooks/use-manage-golfers';
import { teamGolfersIdsState } from '../state/atoms';
import { Checkbox } from './checkbox';
import { GolfersListItem } from './golfers-list-item';
import { SearchBar } from './search-bar';
import {
  FiltersContainer,
  GolfersListContainer,
  RemainingPicks,
  StyledGolfersList,
} from './styled';

export const AvailableGolfersList = () => {
  const { addGolfer } = useManageGolfers();
  const selectedGolferIds = useRecoilValue(teamGolfersIdsState);
  const { selectionPhase } = useSelectionPhase();
  const { searchTerm, setSearchTerm, searchResults } = useGetGolferData();
  const { filter, setFilter, results } = useFilter(searchResults, searchTerm);
  const remainingPicks = 10 - selectedGolferIds.length;

  return (
    <GolfersListContainer data-testid='golfers-list'>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FiltersContainer>
        <Checkbox
          label='Top 10'
          checked={filter === 'top10'}
          onClick={(checked) => setFilter(checked ? 'top10' : 'none')}
        />
        <Checkbox
          label='(A)/Rookie'
          checked={filter === 'rookies'}
          onClick={(checked) => setFilter(checked ? 'rookies' : 'none')}
        />
        <Checkbox
          label='Other'
          checked={filter === 'other'}
          onClick={(checked) => setFilter(checked ? 'other' : 'none')}
        />
        <RemainingPicks noPicksLeft={remainingPicks === 0}>
          Picks Left: {remainingPicks}
        </RemainingPicks>
      </FiltersContainer>
      <StyledGolfersList disabled={remainingPicks === 0}>
        {results.map((golfer, i) => {
          return (
            <GolfersListItem
              key={i}
              golfer={golfer}
              availableView={true}
              onIconClick={addGolfer}
              selectionPhase={selectionPhase}
            />
          );
        })}
      </StyledGolfersList>
    </GolfersListContainer>
  );
};
