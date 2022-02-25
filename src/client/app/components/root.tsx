import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Login } from 'src/client/login';
import { MainLeaderboard } from '../../leaderboard';
import { TeamPage } from '../../team';
import { currentUserIdState } from '../state/atoms';
import { HeaderImage } from './header-image';
import { StyledNav } from './styled';

export const Root = () => {
  const currentUserId = useRecoilValue(currentUserIdState);

  return (
    <>
      <HeaderImage />
      <Router>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route path='/leaderboard' component={MainLeaderboard} />
          <Route path='/team/:id' component={TeamPage} />
        </Switch>

        <StyledNav>
          <ul>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to={`/team/${currentUserId}`}>Team</Link>
            </li>
            <li>
              <Link to='/leaderboard'>Leaderboard</Link>
            </li>
          </ul>
        </StyledNav>
      </Router>
    </>
  );
};
