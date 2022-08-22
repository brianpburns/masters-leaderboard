import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { googleConfig } from 'src/client/config';
import { Leaderboard } from 'src/client/features/leaderboard';
import { AlertContainer, useSendAlert } from 'src/client/features/shared';
import { useGlobalAction } from 'src/client/store';
import { TeamPage } from '../../team';
import { HeaderImage } from './header-image';
import { NavBar } from './nav-bar';

export const Root = () => {
  const { setAuthToken } = useGlobalAction();

  const sendAlert = useSendAlert();

  const logoutSuccess = () => {
    setAuthToken('');
    sendAlert('Successfully logged out', 'success');
  };

  const { signOut } = useGoogleLogout({
    clientId: googleConfig.clientId,
    onLogoutSuccess: logoutSuccess,
    onFailure: () => setAuthToken(''),
  });

  return (
    <>
      <HeaderImage />
      <BrowserRouter>
        <NavBar signOut={signOut} />

        <Switch>
          <Route exact path='/'>
            <Redirect to='/team' />
          </Route>
          <Route path='/team' component={TeamPage} />
          <Route path='/leaderboard' component={Leaderboard} />
        </Switch>
        <AlertContainer />
      </BrowserRouter>
    </>
  );
};
