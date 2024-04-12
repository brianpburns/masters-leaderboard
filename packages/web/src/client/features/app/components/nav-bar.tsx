import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { selectAuthToken, useAppSelector } from '../../../store';
import { useLogout } from '../../login';
import { StyledListItem, StyledNav } from './styled';

export const NavBar = () => {
  const location = useLocation();
  const currentRoute = location.pathname;
  const authToken = useAppSelector(selectAuthToken);
  const handleLogout = useLogout();

  return (
    <StyledNav>
      <ul>
        <StyledListItem active={['/', '/team'].includes(currentRoute)}>
          <Link to={'/team'}>Team</Link>
        </StyledListItem>
        <StyledListItem active={currentRoute === '/leaderboard'}>
          <Link to="/leaderboard">Leaderboard</Link>
        </StyledListItem>
        <StyledListItem active={currentRoute === '/scoreboard'}>
          <Link to="/scoreboard">Scoreboard</Link>
        </StyledListItem>
        {authToken && (
          <StyledListItem active={false}>
            <button onClick={handleLogout}>Logout</button>
          </StyledListItem>
        )}
      </ul>
    </StyledNav>
  );
};
