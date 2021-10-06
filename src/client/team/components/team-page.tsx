import React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { useGetTeam } from '../../api';

import { GolfersList } from './golfers-list';
import { TeamDetails } from './team-details';

const Container = styled.div`
  padding: 25px;
  height: 100vh;
  display: flex;
`;

const TeamContainer = styled.div`
  background-color: white;
  margin-left: 15px;
  max-width: 400px;
  width: 100%;
  height: 100px;
  border-radius: 10px;
`;

type TeamParams = { id: string };

export const TeamPage = () => {
  const { id } = useParams<TeamParams>();
  useGetTeam(parseInt(id));

  return (
    <Container>
      <GolfersList />
      <TeamContainer>
        <TeamDetails />
      </TeamContainer>
    </Container>
  );
};
