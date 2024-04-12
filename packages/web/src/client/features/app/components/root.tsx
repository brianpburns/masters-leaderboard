import { GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { googleConfig } from 'src/client/config';
import { useInitializeState } from 'src/client/data/hooks/use-initialize-state';
import { Leaderboard } from 'src/client/features/leaderboard';
import { AlertContainer } from 'src/client/features/shared';
import { Admin } from '../../admin';
import { Login } from '../../login';
import { Scoreboard } from '../../scoreboard/components/scoreboard';
import { TeamPage } from '../../team-page';
import { HeaderImage } from './header-image';
import { LoginLogoutButton } from './login-logout-button';
import { NavBar } from './nav-bar';

export const Root = () => {
  useInitializeState();

  return (
    <GoogleOAuthProvider clientId={googleConfig.clientId}>
      <HeaderImage />
      <BrowserRouter>
        <LoginLogoutButton />
        <NavBar />

        <Switch>
          <Route exact path="/">
            <Redirect to="/team" />
          </Route>
          <Route path="/team" component={TeamPage} />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/scoreboard" component={Scoreboard} />
          <Route path="/admin" component={Admin} />
          <Route path="/login" component={Login} />
        </Switch>
        <AlertContainer />
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};
