import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { tokenState } from 'src/client/login/state/atoms';
import { useGoogleSignIn } from 'src/client/team/hooks/use-google-sign-in';
import { StyledListItem, StyledNav } from './styled';

export const NavBar = ({ signOut }: { signOut: () => void }) => {
  const location = useLocation();
  const currentRoute = location.pathname;
  const token = useRecoilValue(tokenState);
  const history = useHistory();
  // Only want the callback to run on clicking login, not on page load so we set up two hooks
  useGoogleSignIn(true);
  const { signIn } = useGoogleSignIn(false, () => history.push('team'));

  return (
    <StyledNav>
      <ul>
        <StyledListItem active={['/', '/team'].includes(currentRoute)}>
          <Link to={'/team'}>Team</Link>
        </StyledListItem>
        <StyledListItem active={currentRoute === '/leaderboard'}>
          <Link to='/leaderboard'>Leaderboard</Link>
        </StyledListItem>
        <StyledListItem active={currentRoute === '/login'}>
          {token ? (
            <Link to='/leaderboard' onClick={signOut}>
              Logout
            </Link>
          ) : (
            <Link to='/team' onClick={signIn}>
              Login
            </Link>
          )}
        </StyledListItem>
      </ul>
    </StyledNav>
  );
};
