import { Button } from '@material-ui/core';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { useUpdateTeam } from '../../api/hooks/use-update-team';
import { golfersState } from '../../app';
import { useManageGolfers } from '../hooks/use-manage-golfers';
import { teamGolfersIdsState } from '../state/atoms';
import { teamState } from '../state/selectors';
import { TeamList } from './team-list';
import { TeamName } from './team-name';

export const TeamDetails = () => {
  const allGolfers = useRecoilValue(golfersState);
  const selectedGolferIds = useRecoilValue(teamGolfersIdsState);
  const { removeGolfer } = useManageGolfers();
  const updateTeam = useUpdateTeam();
  const teamDetails = useRecoilValue(teamState);

  const onSave = () => {
    updateTeam(teamDetails);
  };

  return (
    <>
      <TeamName />
      <TeamList
        allGolfers={allGolfers}
        selectedGolferIds={selectedGolferIds}
        removeGolfer={removeGolfer}
      />
      <Button onClick={onSave}>Save</Button>
    </>
  );
};
