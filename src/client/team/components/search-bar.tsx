import React from 'react';
import { IconButton, InputAdornment } from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';
import { SearchBarWrapper, StyledSearchBar } from './styled';

interface Props {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

export const SearchBar = ({ searchTerm, setSearchTerm }: Props) => {
  const handleBlur = (
    e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (e.currentTarget.value === '') setSearchTerm('Name');
  };

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
          searchTerm !== 'Name' &&
          searchTerm !== '' && (
            <InputAdornment position='end'>
              <IconButton
                aria-label='clear search bar'
                onClick={() => setSearchTerm('')}
                edge='end'
                data-testid='clear-button'
              >
                <CloseIcon sx={{ fontSize: 16 }} />
              </IconButton>
            </InputAdornment>
          )
        }
      />
    </SearchBarWrapper>
  );
};
