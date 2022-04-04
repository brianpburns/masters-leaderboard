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
    expect(screen.getByText('Picks Left: 10')).toBeTruthy();
  });

  test('removes a selected golfer from the list', async () => {
    renderGolfersList([mockInvitees[0]]);

    expect(screen.getByText('Tiger Woods')).toBeTruthy();

    userEvent.click(screen.getAllByTestId('AddIcon')[0]);

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

  test('checkbox toggles rookies', () => {
    renderGolfersList();

    const rookiesCheckbox = screen.getByLabelText('Rookies');
    userEvent.click(rookiesCheckbox);

    expect(screen.getByText('Séamus Power')).toBeTruthy();
    expect(screen.queryByText('Tiger Woods')).toBeFalsy();
    expect(screen.queryByText('Rory McIlroy')).toBeFalsy();

    userEvent.click(rookiesCheckbox);

    expect(screen.getByText('Séamus Power')).toBeTruthy();
    expect(screen.getByText('Tiger Woods')).toBeTruthy();
    expect(screen.getByText('Rory McIlroy')).toBeTruthy();
  });

  test('checkbox toggles top 10', () => {
    renderGolfersList();

    const rookiesCheckbox = screen.getByLabelText('Top 10');
    userEvent.click(rookiesCheckbox);

    expect(screen.getByText('Rory McIlroy')).toBeTruthy();
    expect(screen.queryByText('Tiger Woods')).toBeFalsy();
    expect(screen.queryByText('Séamus Power')).toBeFalsy();

    userEvent.click(rookiesCheckbox);

    expect(screen.getByText('Séamus Power')).toBeTruthy();
    expect(screen.getByText('Tiger Woods')).toBeTruthy();
    expect(screen.getByText('Rory McIlroy')).toBeTruthy();
  });

  test('checkbox toggles other', () => {
    renderGolfersList();

    const rookiesCheckbox = screen.getByLabelText('Other');
    userEvent.click(rookiesCheckbox);

    expect(screen.getByText('Tiger Woods')).toBeTruthy();
    expect(screen.queryByText('Rory McIlroy')).toBeFalsy();
    expect(screen.queryByText('Séamus Power')).toBeFalsy();

    userEvent.click(rookiesCheckbox);

    expect(screen.getByText('Séamus Power')).toBeTruthy();
    expect(screen.getByText('Tiger Woods')).toBeTruthy();
    expect(screen.getByText('Rory McIlroy')).toBeTruthy();
  });
});
