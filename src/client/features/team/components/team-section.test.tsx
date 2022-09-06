import { screen } from '@testing-library/react';
import React from 'react';
import { renderWithProviders } from 'src/client/__test__/store';
import { TeamState } from '../types';
import { TeamSection } from './team-section';

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

const renderTeamSection = (selectionPhase = true, noChanges = false) => {
  renderWithProviders(
    <TeamSection
      teamDetails={teamDetails}
      handleNameUpdate={handleNameUpdate}
      selectionPhase={selectionPhase}
      selectedGolferIds={pickedGolfers}
      removeGolfer={removeGolfer}
      onSave={onSave}
      handleCancel={handleCancel}
      noChanges={noChanges}
      deleteTeam={deleteTeam}
    />
  );
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