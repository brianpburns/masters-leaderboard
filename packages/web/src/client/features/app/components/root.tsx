import { GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { googleConfig } from 'src/client/config';
import { useInitializeState } from 'src/client/data/hooks/use-initialize-state';
import { Leaderboard } from 'src/client/features/leaderboard';
import { AlertContainer } from 'src/client/features/shared';
import { Admin } from '../../admin';
import { Login } from '../../login';
import { TeamPage } from '../../team-page';
import { HeaderImage } from './header-image';
import { NavBar } from './nav-bar';

export const Root = () => {
  useInitializeState();

  return (
    <GoogleOAuthProvider clientId={googleConfig.clientId}>
      <HeaderImage />
      <BrowserRouter>
        <NavBar />

        <Switch>
          <Route exact path='/'>
            <Redirect to='/team' />
          </Route>
          <Route path='/team' component={TeamPage} />
          <Route path='/leaderboard' component={Leaderboard} />
          <Route path='/admin' component={Admin} />
          <Route path='/login' component={Login} />
        </Switch>
        <AlertContainer />
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};
