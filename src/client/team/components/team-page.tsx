import React from 'react';
import { useParams } from 'react-router';
import { useGetTeam } from '../../api';

import { GolfersList } from './golfers-list';
import { TeamPageContainer, TeamContainer } from './styled';
import { TeamDetails } from './team-details';

type TeamParams = { id: string };

export const TeamPage = () => {
  const { id } = useParams<TeamParams>();
  useGetTeam(parseInt(id));

  return (
    <TeamPageContainer>
      <GolfersList data-testid='golfers-list' />
      <TeamContainer>
        <TeamDetails />
      </TeamContainer>
    </TeamPageContainer>
  );
};
