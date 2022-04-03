import React from 'react';
import { useGetTeam } from 'src/client/api';
import { Loader } from 'src/client/shared';
import { AvailableGolfersList } from './available-golfers-list';
import { TeamSectionContainer } from './team-section-container';

interface Props {
  selectionPhase: boolean;
}

export const TeamContent = ({ selectionPhase }: Props) => {
  const { loading } = useGetTeam();

  return (
    <>
      <Loader open={loading} />
      {selectionPhase && <AvailableGolfersList />}
      <TeamSectionContainer />
    </>
  );
};
