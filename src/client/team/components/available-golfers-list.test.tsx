import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MutableSnapshot, RecoilRoot } from 'recoil';
import { inviteesState } from 'src/client/api/state/atoms';
import { AvailableGolfersList } from './available-golfers-list';

const invitees = [
  {
    id: '0',
    first_name: 'Tiger',
    last_name: 'Woods',
    countryName: 'USA',
    countryCode: 'USA',
    Amateur: '',
    First: '',
    Past: '',
    image: false,
  },
  {
    id: '1',
    first_name: 'Fred',
    last_name: 'Couples',
    countryName: 'USA',
    countryCode: 'USA',
    Amateur: '',
    First: '',
    Past: '',
    image: false,
  },
];

const renderGolfersList = () => {
  const initializeState = ({ set }: MutableSnapshot) => {
    set(inviteesState, invitees);
  };

  render(
    <RecoilRoot {...{ initializeState }}>
      <AvailableGolfersList />
    </RecoilRoot>
  );
};

describe('Golfers List', () => {
  test('renders list and remaining picks', () => {
    renderGolfersList();

    expect(screen.getByText('Tiger Woods')).toBeTruthy();
    expect(screen.getByText('Remaining picks: 10')).toBeTruthy();
  });

  test('removes a selected golfer from the list', async () => {
    renderGolfersList();
    userEvent.click(screen.getAllByTestId('AddIcon')[0]);

    await waitFor(() => expect(screen.queryByText('Tiger Woods')).toBeFalsy());
  });

  test('filters list of golfers based on searchTerm', () => {
    renderGolfersList();

    expect(screen.getByText('Fred Couples')).toBeTruthy();

    const searchBarInput = screen.getByTestId('search-bar-input');
    userEvent.click(searchBarInput);
    userEvent.type(searchBarInput, 'Tiger');

    expect(screen.getByText('Tiger Woods')).toBeTruthy();
    expect(screen.queryByText('Fred Couples')).toBeFalsy();
  });
});
