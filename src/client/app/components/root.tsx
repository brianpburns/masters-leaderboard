import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { Leaderboard } from 'src/client/leaderboard';
import { googleConfig } from 'src/client/login/google-config';
import { tokenState } from 'src/client/login/state/atoms';
import { AlertContainer } from 'src/client/shared';
import { TeamPage } from '../../team';
import { HeaderImage } from './header-image';
import { NavBar } from './nav-bar';

export const Root = () => {
  const setToken = useSetRecoilState(tokenState);

  const success = () => setToken('');
  const { signOut } = useGoogleLogout({
    clientId: googleConfig.clientId,
    onLogoutSuccess: success,
    onFailure: success,
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
