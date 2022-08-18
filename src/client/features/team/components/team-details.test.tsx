import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MutableSnapshot, RecoilRoot } from 'recoil';
import { inviteesState } from 'src/client/api/state/atoms';
import { renderWithProviders } from 'src/client/__test__/store';
import { Player } from 'src/types';
import { TeamState } from '../types';
import { TeamSectionContainer } from './team-section-container';

const invitees: Player[] = [
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
    top10: false,
  },
];

const activeTeam: TeamState = {
  id: 0,
  owner: 'Burns',
  name: 'Test Name',
  golferIds: [0],
  savedRef: [],
};

const renderTeamDetails = () => {
  const initializeState = ({ set }: MutableSnapshot) => {
    set(inviteesState, invitees);
  };

  renderWithProviders(
    <RecoilRoot {...{ initializeState }}>
      <TeamSectionContainer />
    </RecoilRoot>,
    { preloadedState: { currentTeam: activeTeam } }
  );
};

describe('Team Details', () => {
  test('displays correct team name', () => {
    renderTeamDetails();

    expect(screen.getByText('Test Name')).toBeTruthy();
  });

  test('updates team name when changed', () => {
    renderTeamDetails();
    userEvent.click(screen.getByTestId('edit-name-btn'));

    const nameInput = screen.getByLabelText('Team Name');
    fireEvent.change(nameInput, { target: { value: 'New Name' } });
    fireEvent.blur(nameInput);

    expect(screen.getByText('New Name')).toBeTruthy();
  });

  test('lists selected golfers', () => {
    renderTeamDetails();

    expect(screen.getByText('Tiger Woods')).toBeTruthy();
  });

  test('removes golfer from list', () => {
    renderTeamDetails();
    userEvent.click(screen.getByTestId('RemoveIcon'));

    expect(screen.queryByText('Tiger Woods')).toBeFalsy();
  });
});
