import { screen, waitFor } from '@testing-library/react';
import React from 'react';
import { initialGlobalState } from 'src/client/store';
import { renderWithProviders } from 'src/client/__test__/store';
import { setupMockServer } from 'test/mocks';
import { TeamState } from '../../team-page';
import { TableBody } from './table-body';

setupMockServer();

const mockGolfers = {
  1226: {
    id: 1226,
    name: 'Fred Couples',
    position: 1,
    topar: 13,
    thru: '-',
    today: '-',
    teetime: '',
  },
  33448: {
    id: 33448,
    name: 'Henrik Stenson',
    position: 0,
    topar: 3,
    thru: 'F',
    today: '+4',
    teetime: '1:30 PM',
  },
};

const mockTeam: TeamState = {
  id: 0,
  owner: 'Logan',
  name: 'Team Logan',
  golferIds: [33448, 1226],
  savedRef: [],
};

const mockTeams = [{ ...mockTeam, golfer_ids: mockTeam.golferIds }];

const mockPrizeMoney = {
  0: {
    golfers: [33448],
    prizeMoney: 10,
    topar: -1,
  },
  1: {
    golfers: [1226],
    prizeMoney: 5,
    topar: 0,
  },
};

describe('BodyContainer', () => {
  test('renders correct data', async () => {
    renderWithProviders(
      <table>
        <TableBody />
      </table>,
      {
        preloadedState: {
          currentTeam: { team: mockTeam, isNewTeam: false },
          leaderboard: { teams: mockTeams, cutLine: 0 },
          global: {
            ...initialGlobalState,
            golfers: mockGolfers,
            golferRankings: mockPrizeMoney,
          },
        },
      }
    );

    await waitFor(() => expect(screen.getByText('Team Logan')).toBeTruthy(), {
      timeout: 5000,
    });
  });
});
