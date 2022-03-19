import React from 'react';
import { useGetTeam } from '../../api';
import { GolfersList } from './golfers-list';
import { TeamPageContainer } from './styled';
import { TeamSection } from './team-section';

export const TeamPage = () => {
  useGetTeam();

  return (
    <TeamPageContainer>
      <GolfersList />
      <TeamSection />
    </TeamPageContainer>
  );
};
