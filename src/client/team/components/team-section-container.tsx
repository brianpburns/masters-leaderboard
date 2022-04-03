import isEqual from 'lodash/isEqual';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useDeleteTeam } from 'src/client/api/hooks/use-delete-team';
import { selectionPhaseState } from 'src/client/app';
import { useSendAlert } from 'src/client/shared';
import { useUpdateTeam } from '../../api';
import { useManageGolfers } from '../hooks/use-manage-golfers';
import { savedGolfersIdsRefState, teamGolfersIdsState } from '../state/atoms';
import { teamState } from '../state/selectors';
import { TeamSection } from './team-section';

export const TeamSectionContainer = () => {
  const [pickedGolfers, setPickedGolfers] = useRecoilState(teamGolfersIdsState);
  const [refGolfers, setRefGolfers] = useRecoilState(savedGolfersIdsRefState);
  const { removeGolfer } = useManageGolfers();
  const updateTeam = useUpdateTeam();
  const deleteTeam = useDeleteTeam();
  const [teamDetails, setTeamDetails] = useRecoilState(teamState);
  const sendAlert = useSendAlert();
  const selectionPhase = useRecoilValue(selectionPhaseState);

  const onSave = () => {
    updateTeam(teamDetails);
    setRefGolfers(pickedGolfers);
  };

  const handleNameUpdate = (newName: string) => {
    updateTeam({ ...teamDetails, name: newName });
    setTeamDetails({ ...teamDetails, name: newName });
  };

  const noChanges = isEqual(refGolfers, pickedGolfers);

  const handleCancel = () => {
    setPickedGolfers(refGolfers);
    sendAlert('Discarded Changes', 'info');
  };

  return (
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
  );
};