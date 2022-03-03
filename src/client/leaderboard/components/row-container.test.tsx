import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MutableSnapshot, RecoilRoot } from 'recoil';
import { prizeMoneyState } from 'src/client/api';
import { golfersState } from 'src/client/app';
import { RowContainer } from './row-container';

const mockGolfersData = {
  1226: {
    id: 1226,
    name: 'Fred Couples',
    position: 1,
    topar: 13,
    thru: '-',
    today: '-',
    teetime: '',
  },
  21528: {
    id: 21528,
    name: 'Henrik Stenson',
    position: 0,
    topar: 3,
    thru: 'F',
    today: '+4',
    teetime: '1:30 PM',
  },
};

const mockTeam = {
  id: 0,
  owner: 'Logan',
  name: 'Team Logan',
  golfer_ids: [21528, 1226],
  google_id: '',
};

const mockPrizeMoney = {
  0: {
    golfers: [21528],
    prizeMoney: 10,
    topar: -1,
  },
  1: {
    golfers: [1226],
    prizeMoney: 5,
    topar: 0,
  },
};

const renderRowContainer = () => {
  const initializeState = ({ set }: MutableSnapshot) => {
    set(golfersState, mockGolfersData);
    set(prizeMoneyState, mockPrizeMoney);
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

describe('PrimaryRow', () => {
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
});
