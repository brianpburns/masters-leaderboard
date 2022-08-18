import isEqual from 'lodash/isEqual';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDeleteTeam } from 'src/client/api/hooks/use-delete-team';
import { useSendAlert } from 'src/client/features/shared';
import { selectPhaseSelection, useAppSelector } from 'src/client/store';
import { useUpdateTeam } from '../../../api';
import { useManageGolfers } from '../hooks/use-manage-golfers';
import { useCurrentTeamGolfersRef, useSetCurrentTeam } from '../state/hooks';
import { selectCurrentTeam, selectGolfersSavedRef } from '../state/selectors';
import { TeamSection } from './team-section';

export const TeamSectionContainer = () => {
  const { setGolferIdsRef } = useCurrentTeamGolfersRef();
  const golfersRef = useAppSelector(selectGolfersSavedRef);
  const { selectedGolfers, removeGolfer, setGolfers } = useManageGolfers();
  const updateTeam = useUpdateTeam();
  const deleteTeam = useDeleteTeam();
  const currentTeam = useSelector(selectCurrentTeam);
  const { setCurrentTeam } = useSetCurrentTeam();
  const sendAlert = useSendAlert();
  const selectionPhase = useSelector(selectPhaseSelection);

  const onSave = () => {
    updateTeam(currentTeam);
    setGolferIdsRef(selectedGolfers);
  };

  const handleNameUpdate = (newName: string) => {
    updateTeam({ ...currentTeam, name: newName });
    setCurrentTeam({ ...currentTeam, name: newName });
  };

  const noChanges = isEqual(golfersRef, selectedGolfers);

  const handleCancel = () => {
    setGolfers(golfersRef);
    sendAlert('Discarded Changes', 'info');
  };

  return (
    <TeamSection
      teamDetails={currentTeam}
      handleNameUpdate={handleNameUpdate}
      selectionPhase={selectionPhase}
      selectedGolferIds={selectedGolfers}
      removeGolfer={removeGolfer}
      onSave={onSave}
      handleCancel={handleCancel}
      noChanges={noChanges}
      deleteTeam={deleteTeam}
    />
  );
};
