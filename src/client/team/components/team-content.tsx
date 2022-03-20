import { Backdrop, CircularProgress } from '@material-ui/core';
import React from 'react';
import { useGetTeam } from 'src/client/api';
import styled from 'styled-components';
import { GolfersList } from './golfers-list';
import { TeamSection } from './team-section';

const StyledBackdrop = styled(Backdrop)`
  z-index: 1 !important;
`;

export const TeamContent = () => {
  const { loading } = useGetTeam();

  return (
    <>
      <StyledBackdrop open={loading}>
        <CircularProgress color='inherit' />
      </StyledBackdrop>
      <GolfersList />
      <TeamSection />
    </>
  );
};
