import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { renderWithProviders } from 'src/client/__test__/store';
import { TeamState } from '../types';
import { TeamSectionContainer } from './team-section-container';

const activeTeam: TeamState = {
  id: 0,
  owner: 'Burns',
  name: 'Test Name',
  golferIds: [1226],
  savedRef: [],
};

const renderTeamDetails = () => {
  renderWithProviders(<TeamSectionContainer />, {
    preloadedState: { currentTeam: activeTeam },
  });
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

    expect(screen.getByText('Fred Couples')).toBeTruthy();
  });

  test('removes golfer from list', () => {
    renderTeamDetails();
    userEvent.click(screen.getByTestId('RemoveIcon'));

    expect(screen.queryByText('Fred Couples')).toBeFalsy();
  });
});
