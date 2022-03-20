import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Leaderboard } from 'src/client/leaderboard';
import { LoginContainer } from 'src/client/login';
import { TeamPage } from '../../team';
import { HeaderImage } from './header-image';
import { StyledNav } from './styled';

export const Root = () => {
  return (
    <>
      <HeaderImage />
      <Router>
        <Switch>
          <Route exact path='/login' component={LoginContainer} />
          <Route path='/leaderboard' component={Leaderboard} />
          <Route path='/team' component={TeamPage} />
        </Switch>

        <StyledNav>
          <ul>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to={'/team'}>Team</Link>
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
