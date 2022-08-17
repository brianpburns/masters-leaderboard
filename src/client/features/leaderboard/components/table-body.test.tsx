import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MutableSnapshot, RecoilRoot } from 'recoil';
import { teamState } from 'src/client/features/team/state/selectors';
import { setupMockServer } from 'test/mocks';
import {
  golfersState,
  teamsState,
  golferMoneyRankingsState,
} from 'src/client/api';
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

describe('BodyContainer', () => {
  test('renders correct data', async () => {
    const initializeState = ({ set }: MutableSnapshot) => {
      set(teamState, mockTeam);
      set(teamsState, [mockTeam]);
      set(golferMoneyRankingsState, mockPrizeMoney);
      set(golfersState, mockGolfers);
    };

    render(
      <RecoilRoot initializeState={initializeState}>
        <table>
          <TableBody />
        </table>
      </RecoilRoot>
    );

    await waitFor(() => expect(screen.getByText('Team Logan')).toBeTruthy());
  });
});
