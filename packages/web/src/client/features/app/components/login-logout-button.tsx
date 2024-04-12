import React from 'react';
import { selectAuthToken, useAppSelector } from '../../../store';
import { useLogout } from '../../login';
import { StyledLoginLink, StyledLoginLogoutContainer, StyledLogoutButton } from './styled';

export const LoginLogoutButton = () => {
  const authToken = useAppSelector(selectAuthToken);
  const handleLogout = useLogout();

  return (
    <StyledLoginLogoutContainer>
      {authToken ? (
        <StyledLogoutButton onClick={handleLogout}>Logout</StyledLogoutButton>
      ) : (
        <StyledLoginLink to="/login">Login</StyledLoginLink>
      )}
    </StyledLoginLogoutContainer>
  );
};
