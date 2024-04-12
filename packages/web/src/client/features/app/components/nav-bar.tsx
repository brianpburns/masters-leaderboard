import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StyledListItem, StyledNav } from './styled';

export const NavBar = () => {
  const location = useLocation();
  const currentRoute = location.pathname;

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
      </ul>
    </StyledNav>
  );
};
