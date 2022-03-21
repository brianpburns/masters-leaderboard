import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MutableSnapshot, RecoilRoot } from 'recoil';
import { prizeMoneyState, teamsState } from 'src/client/api';
import { teamState } from 'src/client/team/state/selectors';
import { BodyContainer } from './body-container';
import { setupMockServer } from 'test/mocks';
import { golfersState } from 'src/client/app';

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

describe('BodyContainer', () => {
  test('renders correct data', async () => {
    const initializeState = ({ set }: MutableSnapshot) => {
      set(teamState, mockTeam);
      set(teamsState, [mockTeam]);
      set(prizeMoneyState, mockPrizeMoney);
      set(golfersState, mockGolfers);
    };

    render(
      <RecoilRoot initializeState={initializeState}>
        <table>
          <BodyContainer />
        </table>
      </RecoilRoot>
    );

    await waitFor(() => expect(screen.getByText('Team Logan')).toBeTruthy());
  });
});
