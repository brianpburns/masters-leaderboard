import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { initialGlobalState } from 'src/client/store';
import { renderWithProviders } from 'src/client/__test__/store';
import { generalFieldGolfer } from 'test/mocks';
import { TeamState } from '..';
import { initialCurrentTeamState } from '../state/current-team-slice';
import { SelectedTeam } from './selected-team';

const { id, first_name, last_name } = generalFieldGolfer;
const selectedTeam: TeamState = {
  id: 0,
  owner: 'Burns',
  name: 'Test Name',
  golferIds: [parseInt(id)],
  savedRef: [],
};

const golferName = `${first_name} ${last_name}`;

const renderSelectedTeam = (selectionPhase = true) => {
  renderWithProviders(<SelectedTeam />, {
    preloadedState: {
      global: { ...initialGlobalState, selectionPhase },
      currentTeam: { ...initialCurrentTeamState, team: selectedTeam },
    },
  });
};

describe('SelectedTeam', () => {
  test(`doesn't display buttons when selectionPhase is false`, () => {
    renderSelectedTeam(false);

    expect(screen.queryByText('Save')).toBeFalsy();
    expect(screen.queryByText('Cancel')).toBeFalsy();
  });

  test('displays buttons when selectionPhase is true', () => {
    renderSelectedTeam();

    expect(screen.getByText('Save')).toBeTruthy();
    expect(screen.getByText('Cancel')).toBeTruthy();
  });

  test('lists selected golfers', () => {
    renderSelectedTeam();

    expect(screen.getByText(golferName)).toBeTruthy();
  });

  test('removes golfer from list', () => {
    renderSelectedTeam();

    userEvent.click(screen.getByTestId('RemoveIcon'));

    expect(screen.queryByText(golferName)).toBeFalsy();
  });
});
