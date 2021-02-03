import React from 'react';
import styled from 'styled-components';

const StyledTeamList = styled.div`
  background-color: white;
  margin-left: 15px;
  max-width: 400px;
  width: 100%;
  height: 100px;
  border-radius: 10px;
`;

export const TeamList = () => {
  return <StyledTeamList />;
};
