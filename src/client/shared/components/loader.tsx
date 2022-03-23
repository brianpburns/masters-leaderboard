import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
import styled from 'styled-components';

const StyledBackdrop = styled(Backdrop)`
  z-index: 1 !important;
`;

export const Loader = ({ open }: { open: boolean }) => (
  <StyledBackdrop open={open}>
    <CircularProgress color='inherit' data-testid='loader' />
  </StyledBackdrop>
);
