import { screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MutableSnapshot, RecoilRoot } from 'recoil';
import { golfersState } from 'src/client/api';
import { renderWithProviders } from 'src/client/__test__/store';
import { setupMockServer } from 'test/mocks';
import { TeamContent } from './team-content';

setupMockServer();

const cleanGolfers = {
  '1226': {
    id: 1226,
    name: 'Fred Couples',
    position: 72,
    topar: 4,
    thru: '7',
    today: '+4',
    teetime: '12:24 PM',
  },
};

const renderTeamContent = (selectionPhase = true) => {
  const initializeState = ({ set }: MutableSnapshot) => {
    set(golfersState, cleanGolfers);
  };

  renderWithProviders(
    <RecoilRoot initializeState={initializeState}>
      <TeamContent selectionPhase={selectionPhase} />
    </RecoilRoot>,
    {
      preloadedState: { global: { token: '' } },
    }
  );
};

describe('TeamContent', () => {
  test('renders loader followed by golfers list and team data', async () => {
    renderTeamContent();

    expect(screen.getByTestId('loader')).toBeTruthy();

    await waitFor(() => {
      expect(screen.getByText('burnsing it up')).toBeTruthy();
      expect(screen.getByTestId('golfers-list')).toBeTruthy();
    });
  });

  test(`doesn't render available golfers when selectionPhase is false`, async () => {
    renderTeamContent(false);

    expect(screen.getByTestId('loader')).toBeTruthy();

    await waitFor(() => {
      expect(screen.getByText('burnsing it up')).toBeTruthy();
      expect(screen.queryByTestId('golfers-list')).toBeFalsy();
    });
  });
});
