import React from 'react';
import { useGetTeam } from 'src/client/api';
import { Loader } from 'src/client/shared';
import { AvailableGolfersList } from './available-golfers-list';
import { TeamSection } from './team-section';

export const TeamContent = () => {
  const { loading } = useGetTeam();

  return (
    <>
      <Loader open={loading} />
      <AvailableGolfersList />
      <TeamSection />
    </>
  );
};
