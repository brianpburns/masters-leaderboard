import React from 'react';
import { useGetTeam } from 'src/client/api';
import { Loader } from 'src/client/features/shared';
import { AvailableGolfersList } from './available-golfers-list';
import { TeamSectionContainer } from './team-section-container';

interface Props {
  selectionPhase: boolean;
}

export const TeamContent = ({ selectionPhase }: Props) => {
  const { isFetching } = useGetTeam();

  return (
    <>
      <Loader open={isFetching} />
      {selectionPhase && <AvailableGolfersList />}
      <TeamSectionContainer />
    </>
  );
};
