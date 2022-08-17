import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MutableSnapshot, RecoilRoot } from 'recoil';
import { golferMoneyRankingsState, golfersState } from 'src/client/api';
import { selectionPhaseState } from 'src/client/features/app';
import { GolferMoneyRankings, Golfers } from 'src/types';
import { RowContainer } from './row-container';

const mockGolfersData: Golfers = {
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
    name: 'Justin Thomas',
    id: 33448,
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
  golfer_ids: [33448, 1226],
  google_id: '',
};

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

const renderRowContainer = (
  selectionPhase = false,
  golferData: Golfers | null = mockGolfersData,
  prizeMoney: GolferMoneyRankings | null = mockPrizeMoney
) => {
  const initializeState = ({ set }: MutableSnapshot) => {
    set(golfersState, golferData);
    set(golferMoneyRankingsState, prizeMoney);
    set(selectionPhaseState, selectionPhase);
  };
  render(
    <RecoilRoot initializeState={initializeState}>
      <table>
        <tbody>
          <RowContainer position={1} row={mockTeam} />
        </tbody>
      </table>
    </RecoilRoot>
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

    userEvent.click(screen.getByText('Team Logan'));

    expect(screen.getByTestId('toggle-up')).toBeTruthy();
    expect(screen.getByTestId('sub-table-row')).toBeTruthy();
  });

  test('subtable does not open when there is no leaderboard data', () => {
    renderRowContainer(false, null, null);

    userEvent.click(screen.getByText('Team Logan'));

    expect(screen.queryByTestId('toggle-up')).toBeFalsy();
    expect(screen.queryByTestId('sub-table-row')).toBeFalsy();
  });

  test('subtable does not open when selectionPhase is true', () => {
    renderRowContainer(true);

    userEvent.click(screen.getByText('Team Logan'));

    expect(screen.queryByTestId('toggle-up')).toBeFalsy();
    expect(screen.queryByTestId('sub-table-row')).toBeFalsy();
  });
});
