import React from 'react';
import { useGetGolferData } from 'src/client/data/hooks/use-get-golfer-data';
import { useManageGolfers } from '../../hooks/use-manage-golfers';
import { GolfersListItem } from '../golfers-list-item';
import {
  FiltersContainer,
  GolfersListContainer,
  RemainingPicks,
  StyledGolfersList,
} from '../styled';
import { Checkbox } from './checkbox';
import { useFilter } from './hooks/use-filter';
import { SearchBar } from './search-bar';

export const AvailableGolfersList = () => {
  const { addGolfer } = useManageGolfers();
  const { selectedGolfers } = useManageGolfers();
  const { searchTerm, setSearchTerm, searchResults } = useGetGolferData();
  const { filter, setFilter, results } = useFilter(searchResults, searchTerm);
  const remainingPicks = 10 - selectedGolfers.length;

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
            />
          );
        })}
      </StyledGolfersList>
    </GolfersListContainer>
  );
};
