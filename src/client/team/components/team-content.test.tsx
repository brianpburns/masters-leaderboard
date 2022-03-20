import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MutableSnapshot, RecoilRoot } from 'recoil';
import { golfersState } from 'src/client/app';
import { tokenState } from 'src/client/login/state/atoms';
import { cleanGolfers, setupMockServer } from 'test/mocks';
import { TeamContent } from './team-content';

setupMockServer();

const renderTeamContent = () => {
  const initializeState = ({ set }: MutableSnapshot) => {
    set(tokenState, 'dummyToken');
    set(golfersState, cleanGolfers);
  };

  render(
    <RecoilRoot initializeState={initializeState}>
      <TeamContent />
    </RecoilRoot>
  );
};

describe('TeamContent', () => {
  test('renders loader initially', () => {
    renderTeamContent();

    expect(screen.getByTestId('loader')).toBeTruthy();
  });

  test('renders team data and available golfers list', async () => {
    renderTeamContent();

    await waitFor(() => {
      expect(screen.getByText('burnsing it up')).toBeTruthy();
      expect(screen.getByTestId('golfers-list')).toBeTruthy();
    });
  });
});
