import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { MainLeaderboard } from '../../leaderboard';
import { TeamPage } from '../../team';
import { useRecoilValue } from 'recoil';
import { currentUserIdState } from '../state/atoms';
import { Login } from 'src/client/login';
import { HeaderImage } from './header-image';
import { AppContainer, StyledNav } from './styled';

export const Root = () => {
  const currentUserId = useRecoilValue(currentUserIdState);

  return (
    <AppContainer>
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
    </AppContainer>
  );
};
