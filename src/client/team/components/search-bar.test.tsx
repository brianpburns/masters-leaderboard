import React from 'react';
import { render, screen } from '@testing-library/react';

import { SearchBar } from './search-bar';
import userEvent from '@testing-library/user-event';

const setSearchTermMock = jest.fn();

describe('Search Bar', () => {
  afterEach(() => jest.clearAllMocks());

  test('displays search icon and not cancel icon by default (searchTerm = Name)', () => {
    render(<SearchBar searchTerm='' setSearchTerm={setSearchTermMock} />);

    expect(screen.queryByTestId('clear-button')).toBeFalsy();
    expect(screen.getByTestId('search-icon')).toBeTruthy();
  });

  test('clears search term when cancel button is clicked', () => {
    render(<SearchBar searchTerm='Test' setSearchTerm={setSearchTermMock} />);

    const searchBarInput = screen.getByTestId('search-bar-input');
    userEvent.click(searchBarInput);
    userEvent.type(searchBarInput, 'Tiger');

    userEvent.click(screen.getByTestId('clear-button'));

    expect(screen.getByTestId('search-bar-input')).toHaveTextContent('');
  });
});
