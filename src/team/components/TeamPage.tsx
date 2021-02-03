import React from 'react';
import styled from 'styled-components';

import { useGolfersList } from '../../state';

import { GolfersList } from './GolfersList';
import { TeamList } from './TeamList';

const Container = styled.div`
  padding: 25px;
  height: 100vh;
  display: flex;
`;

export const TeamPage = () => {
  const golfers = useGolfersList();
  // Hit the API
  return (
    <Container>
      <GolfersList golfers={golfers} />
      <TeamList />
    </Container>
  );
};
