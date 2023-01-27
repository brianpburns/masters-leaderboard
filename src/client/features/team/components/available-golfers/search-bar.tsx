import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';
import React from 'react';
import { SearchBarWrapper, StyledIconButton, StyledSearchBar } from '../styled';

interface Props {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

export const SearchBar = ({ searchTerm, setSearchTerm }: Props) => {
  const searching = searchTerm !== '';

  return (
    <SearchBarWrapper>
      <StyledSearchBar
        data-testid='search-bar-input'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.currentTarget.value)}
        placeholder='Search'
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
