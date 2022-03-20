import React from 'react';
import { useGetTeam } from 'src/client/api';
import { Loader } from 'src/client/shared';
import { GolfersList } from './golfers-list';
import { TeamSection } from './team-section';

export const TeamContent = () => {
  const { loading } = useGetTeam();

  return (
    <>
      <Loader open={loading} />
      <GolfersList />
      <TeamSection />
    </>
  );
};
