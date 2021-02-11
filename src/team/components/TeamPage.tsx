import React from 'react';
import styled from 'styled-components';

import { GolfersList } from './GolfersList';
import { TeamList } from './TeamList';

const Container = styled.div`
  padding: 25px;
  height: 100vh;
  display: flex;
`;

export const TeamPage = () => (
  <Container>
    <GolfersList />
    <TeamList />
  </Container>
);
