import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { MainLeaderboard } from '../../leaderboard';
import { TeamPage } from '../../team';

const AppContainer = styled.div`
  display: grid;
  background-color: green;
  background-image: url('//d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/masters-2022/9721323d-masters.jpg');
  background-repeat: no-repeat;
  background-position: 'left center';
  background-size: cover;
  width: 100%;
  height: 110vh;
  overflow-y: auto;
`;

// const StyledNav = styled.nav`
//   background-color: white;
//   height: max-content;
// `;

export const Root = () => {
  return (
    <AppContainer>
      {/* <Router> */}
      {/* <StyledNav>
          <ul>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/team'>Team</Link>
            </li>
            <li>
              <Link to='/leaderboard'>Leaderboard</Link>
            </li>
          </ul>
        </StyledNav> */}

      {/* <Switch> */}
      {/* <Route path="/">
          <MainLeaderboard />
        </Route> */}
      {/* <Route path='/leaderboard'> */}
      <MainLeaderboard />
      {/* </Route>
          <Route path='/team'>
            <TeamPage />
          </Route> */}
      {/* </Switch> */}
      {/* </Router> */}
    </AppContainer>
  );
};
