import React from 'react';

import { useSelectedGolfers } from '../hooks/useSelectedGolfers';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedGolfersState, teamNameState } from '../state/selectors';
import { TeamList } from './team-list';
import { TeamName } from './team-name';

export const TeamDetails = () => {
  const selectedGolfers = useRecoilValue(selectedGolfersState);
  const { removeGolfer } = useSelectedGolfers();
  const [teamName, setTeamName] = useRecoilState(teamNameState);

  return (
    <>
      <TeamName teamName={teamName} setTeamName={setTeamName} />
      <TeamList selectedGolfers={selectedGolfers} removeGolfer={removeGolfer} />
    </>
  );
};
