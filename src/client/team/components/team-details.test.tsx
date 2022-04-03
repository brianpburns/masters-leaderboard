import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MutableSnapshot, RecoilRoot } from 'recoil';
import { inviteesState } from 'src/client/api/state/atoms';
import { teamState } from '../state/selectors';
import { TeamSectionContainer } from './team-section-container';

const invitees = [
  {
    id: '0',
    first_name: 'Tiger',
    last_name: 'Woods',
    countryName: 'USA',
    countryCode: 'USA',
    Amateur: '',
    First: '',
    Past: '',
    image: false,
  },
];

const activeTeam = {
  id: 0,
  owner: 'Burns',
  name: 'Test Name',
  golfer_ids: [0],
};

const renderTeamDetails = () => {
  const initializeState = ({ set }: MutableSnapshot) => {
    set(teamState, activeTeam);
    set(inviteesState, invitees);
  };

  render(
    <RecoilRoot {...{ initializeState }}>
      <TeamSectionContainer />
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
    userEvent.click(screen.getByTestId('edit-name-btn'));

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
    userEvent.click(screen.getByTestId('remove-golfer'));

    expect(screen.queryByText('Tiger Woods')).toBeFalsy();
  });
});
