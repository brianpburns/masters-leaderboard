import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MutableSnapshot, RecoilRoot } from 'recoil';

import { activeTeamState, selectedGolfersState } from '../state/selectors';
import { TeamDetails } from './team-details';
import { golfersState } from '../../app';

const selectedGolfers = [
  {
    id: '0',
    name: 'Tiger Woods',
    position: 10,
    prizeMoney: 0,
    topar: 2,
    thru: '2',
    today: '2',
    teetime: '',
  },
];

const allGolfers = {
  '0': {
    id: '0',
    name: 'Tiger Woods',
    position: 10,
    prizeMoney: 0,
    topar: 2,
    thru: '2',
    today: '2',
    teetime: '',
  },
};

const activeTeam = {
  id: '0',
  owner: 'Burns',
  teamName: 'Test Name',
  selectedGolferIds: [],
};

const renderTeamDetails = () => {
  const initializeState = ({ set }: MutableSnapshot) => {
    set(activeTeamState, activeTeam);
    set(golfersState, allGolfers);
    set(selectedGolfersState, selectedGolfers);
  };

  render(
    <RecoilRoot {...{ initializeState }}>
      <TeamDetails />
    </RecoilRoot>
  );
};

describe('Team Details', () => {
  test('displays correct team name', () => {
    renderTeamDetails();

    expect(screen.getByText('Test Name')).toBeTruthy();
  });

  test('updates team name when changed', () => {
    renderTeamDetails();
    fireEvent.click(screen.getByTestId('edit-name-btn'));

    const nameInput = screen.getByLabelText('Team Name');
    fireEvent.change(nameInput, { target: { value: 'New Name' } });
    fireEvent.blur(nameInput);

    expect(screen.getByText('New Name')).toBeTruthy();
  });

  test('lists selected golfers', () => {
    renderTeamDetails();

    expect(screen.getByText('Tiger Woods')).toBeTruthy();
  });

  test('removes golfer from list', () => {
    renderTeamDetails();
    fireEvent.click(screen.getByTestId('remove-golfer'));

    expect(screen.queryByText('Tiger Woods')).toBeFalsy();
  });
});
