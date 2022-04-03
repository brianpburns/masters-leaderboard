import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MutableSnapshot, RecoilRoot } from 'recoil';
import { golfersState } from 'src/client/api';
import { tokenState } from 'src/client/login/state/atoms';
import { cleanGolfers, setupMockServer } from 'test/mocks';
import { TeamContent } from './team-content';

setupMockServer();

const renderTeamContent = (selectionPhase = true) => {
  const initializeState = ({ set }: MutableSnapshot) => {
    set(tokenState, 'dummyToken');
    set(golfersState, cleanGolfers);
  };

  render(
    <RecoilRoot initializeState={initializeState}>
      <TeamContent selectionPhase={selectionPhase} />
    </RecoilRoot>
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
