import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { renderWithProviders } from 'src/client/__test__/store';
import { initialGlobalState } from 'src/client/store';
import { GolferMoneyRankings, GolferScores } from 'src/types';
import { generalFieldGolfer, top10Golfer } from 'test/mocks';
import { RowContainer } from './row-container';

const { id, first_name, last_name } = generalFieldGolfer;
const { id: id10, first_name: firstName10, last_name: lastName10 } = top10Golfer;

const mockGolfersData: GolferScores = {
  [id]: {
    id: parseInt(id),
    name: `${first_name} ${last_name}`,
    position: 1,
    topar: 13,
    thru: '-',
    today: '-',
    teetime: '',
  },
  [id10]: {
    id: parseInt(id10),
    name: `${firstName10} ${lastName10}`,
    position: 0,
    topar: 14,
    thru: '-',
    today: '-',
    teetime: '',
  },
};

const mockTeam = {
  id: 0,
  owner: 'Logan',
  name: 'Team Logan',
  golfer_ids: [parseInt(generalFieldGolfer.id), parseInt(top10Golfer.id)],
  google_id: '',
  prizeMoney: 0,
};

const mockPrizeMoney = {
  0: {
    golfers: [parseInt(generalFieldGolfer.id)],
    prizeMoney: 10,
    topar: -1,
  },
  1: {
    golfers: [parseInt(top10Golfer.id)],
    prizeMoney: 5,
    topar: 0,
  },
};

const renderRowContainer = (
  selectionPhase = false,
  golferData: GolferScores = mockGolfersData,
  prizeMoney: GolferMoneyRankings = mockPrizeMoney,
) => {
  renderWithProviders(
    <table>
      <tbody>
        <RowContainer position={1} row={mockTeam} />
      </tbody>
    </table>,
    {
      preloadedState: {
        global: {
          ...initialGlobalState,
          selectionPhase,
          golferScores: golferData,
          golferRankings: prizeMoney,
        },
      },
    },
  );
};

describe('RowContainer', () => {
  test('subtable is closed by default', () => {
    renderRowContainer();

    expect(screen.getByTestId('toggle-down')).toBeTruthy();
    expect(screen.queryByTestId('sub-table-row')).toBeFalsy();
  });

  test('subtable opens on clicking row', () => {
    renderRowContainer();

    userEvent.click(screen.getByText('Logan'));

    expect(screen.getByTestId('toggle-up')).toBeTruthy();
    expect(screen.getByTestId('sub-table-row')).toBeTruthy();
  });

  test('subtable does not open when there is no leaderboard data', () => {
    renderRowContainer(false, [], []);

    userEvent.click(screen.getByText('Logan'));

    expect(screen.queryByTestId('toggle-up')).toBeFalsy();
    expect(screen.queryByTestId('sub-table-row')).toBeFalsy();
  });

  test('subtable does not open when selectionPhase is true', () => {
    renderRowContainer(true);

    userEvent.click(screen.getByText('Logan'));

    expect(screen.queryByTestId('toggle-up')).toBeFalsy();
    expect(screen.queryByTestId('sub-table-row')).toBeFalsy();
  });
});
