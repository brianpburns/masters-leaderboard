import React from 'react';
import { useParams } from 'react-router';
import { useGetTeam } from '../../api';

import { GolfersList } from './golfers-list';
import { TeamPageContainer } from './styled';
import { TeamSection } from './team-section';

type TeamParams = { id: string };

export const TeamPage = () => {
  const { id } = useParams<TeamParams>();
  useGetTeam(parseInt(id));

  return (
    <TeamPageContainer>
      <GolfersList />
      <TeamSection />
    </TeamPageContainer>
  );
};
