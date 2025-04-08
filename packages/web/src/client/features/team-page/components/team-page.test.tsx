import { GoogleOAuthProvider } from '@react-oauth/google';
import { screen } from '@testing-library/react';
import React from 'react';
import { renderWithProviders } from 'src/client/__test__/store';
import { initialGlobalState } from 'src/client/store';
import { generalFieldGolfer, representativeGoflersList } from 'test/mocks';
import { TeamState } from '../types';
import { TeamPage } from './team-page';

const selectedTeam: TeamState = {
  id: 0,
  owner: 'Burns',
  name: 'Test Name',
  golferIds: [parseInt(generalFieldGolfer.id)],
  savedRef: [],
};

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

const renderTeamDetails = (selectionPhase = true) => {
  renderWithProviders(
    <GoogleOAuthProvider clientId="dummy-client-id">
      <TeamPage />
    </GoogleOAuthProvider>,
    {
      preloadedState: {
        global: { ...initialGlobalState, token: 'auth-token', selectionPhase, golfersData: representativeGoflersList },
        currentTeam: { team: selectedTeam, isNewTeam: false },
      },
    },
  );
};

describe('TeamPage', () => {
  test('displays correct selected team section and available golfers', () => {
    renderTeamDetails();

    expect(screen.getByText('Test Name')).toBeTruthy();
    expect(screen.getByTestId('golfers-list')).toBeTruthy();
  });

  test(`doesn't render available golfers when selectionPhase is false`, () => {
    renderTeamDetails(false);

    expect(screen.getByText('Test Name')).toBeTruthy();
    expect(screen.queryByTestId('golfers-list')).toBeFalsy();
  });
});
