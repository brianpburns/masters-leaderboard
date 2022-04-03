import { render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { TeamSection } from './team-section';

const teamDetails = {
  id: 1,
  owner: 'burns',
  name: 'burnsing it up',
  golfer_ids: [1],
};
const handleNameUpdate = jest.fn();
const removeGolfer = jest.fn();
const onSave = jest.fn();
const handleCancel = jest.fn();
const deleteTeam = jest.fn();
const pickedGolfers = [1];

const renderTeamSection = (selectionPhase = true, noChanges = false) => {
  render(
    <RecoilRoot>
      <TeamSection
        teamDetails={teamDetails}
        handleNameUpdate={handleNameUpdate}
        selectionPhase={selectionPhase}
        pickedGolfers={pickedGolfers}
        removeGolfer={removeGolfer}
        onSave={onSave}
        handleCancel={handleCancel}
        noChanges={noChanges}
        deleteTeam={deleteTeam}
      />
    </RecoilRoot>
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
