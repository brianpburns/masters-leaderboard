import React from 'react';
import styled from 'styled-components';

import { GolfersListContainer } from './golfers-list-container';
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

export const TeamPage = () => (
  <Container>
    <GolfersListContainer />
    <TeamContainer>
      <TeamDetails />
    </TeamContainer>
  </Container>
);
