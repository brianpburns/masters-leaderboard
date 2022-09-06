import { screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { renderWithProviders } from 'src/client/__test__/store';
import { AvailableGolfersList } from './available-golfers-list';

jest.mock('../../../data/golfers-data', () => ({
  golfersData: {
    players: [
      {
        last_name: 'Woods ',
        first_name: 'Tiger',
        id: '8793',
        countryName: 'United States',
        countryCode: 'USA',
        Amateur: '',
        First: '',
        Past: '',
        image: true,
        top10: false,
      },
      {
        last_name: 'Power ',
        first_name: 'Séamus',
        id: '28252',
        countryName: 'Ireland',
        countryCode: 'IRL',
        Amateur: '',
        First: '1',
        Past: '',
        image: false,
        top10: false,
      },
      {
        last_name: 'McIlroy ',
        first_name: 'Rory',
        id: '28237',
        countryName: 'N. Ireland',
        countryCode: 'NIR',
        Amateur: '',
        First: '',
        Past: '',
        image: true,
        top10: true,
      },
      {
        last_name: 'Shepherd ',
        first_name: 'Laird',
        id: '60371',
        countryName: 'England',
        countryCode: 'ENG',
        Amateur: '1',
        First: '1',
        Past: '',
        image: false,
        top10: false,
      },
    ],
  },
}));

const renderGolfersList = () => {
  renderWithProviders(<AvailableGolfersList />);
};

describe('Available Golfers List', () => {
  test('renders list and remaining picks', () => {
    renderGolfersList();

    expect(screen.getByText('Tiger Woods')).toBeTruthy();
    expect(screen.getByText('Picks Left: 10')).toBeTruthy();
  });

  test('removes a selected golfer from the list', async () => {
    renderGolfersList();

    expect(screen.getByText('Tiger Woods')).toBeTruthy();

    const listItem = screen.getByTestId('available-golfer-tiger-woods');
    const addIcon = within(listItem).getByTestId('AddIcon');

    userEvent.click(addIcon);

    await waitFor(() => expect(screen.queryByText('Tiger Woods')).toBeFalsy());
  });

  test('filters list of golfers based on searchTerm', () => {
    renderGolfersList();

    expect(screen.getByText('Rory McIlroy')).toBeTruthy();

    const searchBarInput = screen.getByTestId('search-bar-input');
    userEvent.click(searchBarInput);
    userEvent.type(searchBarInput, 'Tiger');

    expect(screen.getByText('Tiger Woods')).toBeTruthy();
    expect(screen.queryByText('Rory McIlroy')).toBeFalsy();
  });

  test('checkbox toggles rookies and amateurs', () => {
    renderGolfersList();

    const rookiesCheckbox = screen.getByLabelText('(A)/Rookie');
    userEvent.click(rookiesCheckbox);

    expect(screen.getByText('Séamus Power')).toBeTruthy();
    expect(screen.getByText('Laird Shepherd')).toBeTruthy();
    expect(screen.queryByText('Tiger Woods')).toBeFalsy();
    expect(screen.queryByText('Rory McIlroy')).toBeFalsy();

    userEvent.click(rookiesCheckbox);

    expect(screen.getByText('Séamus Power')).toBeTruthy();
    expect(screen.getByText('Tiger Woods')).toBeTruthy();
    expect(screen.getByText('Rory McIlroy')).toBeTruthy();
    expect(screen.getByText('Laird Shepherd')).toBeTruthy();
  });

  test('checkbox toggles top 10', () => {
    renderGolfersList();

    const rookiesCheckbox = screen.getByLabelText('Top 10');
    userEvent.click(rookiesCheckbox);

    expect(screen.getByText('Rory McIlroy')).toBeTruthy();
    expect(screen.queryByText('Tiger Woods')).toBeFalsy();
    expect(screen.queryByText('Séamus Power')).toBeFalsy();
    expect(screen.queryByText('Laird Shepherd')).toBeFalsy();

    userEvent.click(rookiesCheckbox);

    expect(screen.getByText('Séamus Power')).toBeTruthy();
    expect(screen.getByText('Tiger Woods')).toBeTruthy();
    expect(screen.getByText('Rory McIlroy')).toBeTruthy();
    expect(screen.getByText('Laird Shepherd')).toBeTruthy();
  });

  test('checkbox toggles other', () => {
    renderGolfersList();

    const rookiesCheckbox = screen.getByLabelText('Other');
    userEvent.click(rookiesCheckbox);

    expect(screen.getByText('Tiger Woods')).toBeTruthy();
    expect(screen.queryByText('Rory McIlroy')).toBeFalsy();
    expect(screen.queryByText('Séamus Power')).toBeFalsy();
    expect(screen.queryByText('Laird Shepherd')).toBeFalsy();

    userEvent.click(rookiesCheckbox);

    expect(screen.getByText('Séamus Power')).toBeTruthy();
    expect(screen.getByText('Tiger Woods')).toBeTruthy();
    expect(screen.getByText('Rory McIlroy')).toBeTruthy();
    expect(screen.getByText('Laird Shepherd')).toBeTruthy();
  });
});