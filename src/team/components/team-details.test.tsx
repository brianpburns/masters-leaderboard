import React from 'react';
import { render, screen } from '@testing-library/react';
import { MutableSnapshot, RecoilRoot } from 'recoil';
import { teamNameState } from '../state/selectors';
import { TeamDetails } from './team-details';

const renderTeamDetails = (name: string) => {
  const initializeState = ({ set }: MutableSnapshot) => {
    set(teamNameState, name);
  };

  render(
    <RecoilRoot {...{ initializeState }}>
      <TeamDetails />
    </RecoilRoot>
  );
};

describe('Team Details', () => {
  test('displays correct team name', () => {
    renderTeamDetails('test name');

    expect(screen.getByText('test name')).toBeTruthy();
  });
});
