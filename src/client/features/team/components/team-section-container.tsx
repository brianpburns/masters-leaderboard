import isEqual from 'lodash/isEqual';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useDeleteTeam } from 'src/client/api/hooks/use-delete-team';
import { selectionPhaseState } from 'src/client/features/app';
import { useSendAlert } from 'src/client/features/shared';
import { useUpdateTeam } from '../../../api';
import { useManageGolfers } from '../hooks/use-manage-golfers';
import { savedGolfersIdsRefState, teamGolfersIdsState } from '../state/atoms';
import { teamState } from '../state/selectors';
import { TeamSection } from './team-section';

export const TeamSectionContainer = () => {
  const [selectedGolferIds, setSelectedGolferIds] =
    useRecoilState(teamGolfersIdsState);
  const [refGolfers, setRefGolfers] = useRecoilState(savedGolfersIdsRefState);
  const { removeGolfer } = useManageGolfers();
  const updateTeam = useUpdateTeam();
  const deleteTeam = useDeleteTeam();
  const [teamDetails, setTeamDetails] = useRecoilState(teamState);
  const sendAlert = useSendAlert();
  const selectionPhase = useRecoilValue(selectionPhaseState);

  const onSave = () => {
    updateTeam(teamDetails);
    setRefGolfers(selectedGolferIds);
  };

  const handleNameUpdate = (newName: string) => {
    updateTeam({ ...teamDetails, name: newName });
    setTeamDetails({ ...teamDetails, name: newName });
  };

  const noChanges = isEqual(refGolfers, selectedGolferIds);

  const handleCancel = () => {
    setSelectedGolferIds(refGolfers);
    sendAlert('Discarded Changes', 'info');
  };

  return (
    <TeamSection
      teamDetails={teamDetails}
      handleNameUpdate={handleNameUpdate}
      selectionPhase={selectionPhase}
      selectedGolferIds={selectedGolferIds}
      removeGolfer={removeGolfer}
      onSave={onSave}
      handleCancel={handleCancel}
      noChanges={noChanges}
      deleteTeam={deleteTeam}
    />
  );
};
