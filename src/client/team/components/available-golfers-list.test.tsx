import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MutableSnapshot, RecoilRoot } from 'recoil';
import { inviteesState } from 'src/client/api/state/atoms';
import { AvailableGolfersList } from './available-golfers-list';

const mockInvitees = [
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
    last_name: 'Couples ',
    first_name: 'Fred',
    id: '1226',
    countryName: 'United States',
    countryCode: 'USA',
    Amateur: '',
    First: '',
    Past: '1',
    image: true,
    top10: false,
  },
];

const renderGolfersList = (invitees = mockInvitees) => {
  const initializeState = ({ set }: MutableSnapshot) => {
    set(inviteesState, invitees);
  };

  render(
    <RecoilRoot {...{ initializeState }}>
      <AvailableGolfersList />
    </RecoilRoot>
  );
};

describe('Available Golfers List', () => {
  test('renders list and remaining picks', () => {
    renderGolfersList();

    expect(screen.getByText('Tiger Woods')).toBeTruthy();
    expect(screen.getByText('Picks: 10')).toBeTruthy();
  });

  test('removes a selected golfer from the list', async () => {
    renderGolfersList([mockInvitees[0]]);

    expect(screen.getByText('Tiger Woods')).toBeTruthy();

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
