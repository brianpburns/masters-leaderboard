import { InputAdornment } from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { SearchBarWrapper, StyledIconButton, StyledSearchBar } from './styled';

interface Props {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

export const SearchBar = ({ searchTerm, setSearchTerm }: Props) => {
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === '') setSearchTerm('Name');
  };
  const searching = searchTerm !== 'Name';

  return (
    <SearchBarWrapper>
      <StyledSearchBar
        id='standard'
        data-testid='search-bar-input'
        value={searchTerm}
        onClick={() => searchTerm === 'Name' && setSearchTerm('')}
        onChange={(e) => setSearchTerm(e.currentTarget.value)}
        onBlur={handleBlur}
        endAdornment={
          <InputAdornment position='end'>
            {searching ? (
              <StyledIconButton
                aria-label='clear search bar'
                onClick={() => setSearchTerm('')}
                edge='end'
                data-testid='clear-button'
              >
                <CloseIcon sx={{ fontSize: 16 }} />
              </StyledIconButton>
            ) : (
              <StyledIconButton
                aria-label='search icon'
                edge='end'
                data-testid='search-icon'
              >
                <SearchIcon sx={{ fontSize: 16 }} />
              </StyledIconButton>
            )}
          </InputAdornment>
        }
      />
    </SearchBarWrapper>
  );
};
