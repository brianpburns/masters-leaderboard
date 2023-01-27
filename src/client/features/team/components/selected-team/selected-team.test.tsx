import { screen } from '@testing-library/react';
import React from 'react';
import { initialGlobalState } from 'src/client/store';
import { renderWithProviders } from 'src/client/__test__/store';
import { TeamState } from '../../types';
import { SelectedTeam } from './selected-team';

const teamDetails: TeamState = {
  id: 1,
  owner: 'burns',
  name: 'burnsing it up',
  golferIds: [8793],
  savedRef: [],
};
const handleNameUpdate = jest.fn();
const removeGolfer = jest.fn();
const onSave = jest.fn();
const handleCancel = jest.fn();
const deleteTeam = jest.fn();
const pickedGolfers = [8793];

const renderTeamSection = (selectionPhase = true) => {
  renderWithProviders(<SelectedTeam />, {
    preloadedState: { global: { ...initialGlobalState, selectionPhase } },
  });
};

describe('TeamSection', () => {
  test(`doesn't display buttons when selectionPhase is false`, () => {
    renderTeamSection(false);

    expect(screen.queryByText('Save')).toBeFalsy();
    expect(screen.queryByText('Cancel')).toBeFalsy();
  });

  test('displays buttons when selectionPhase is true', () => {
    renderTeamSection();

    expect(screen.getByText('Save')).toBeTruthy();
    expect(screen.getByText('Cancel')).toBeTruthy();
  });
});
