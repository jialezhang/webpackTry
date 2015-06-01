import React from 'react';
import { Route } from 'react-router';
import App from './App';
import Homepage from './Homepage';
import Login from './bases/Login';
import Follower from './Follower';
import Register from './bases/Register';
import RepoPage from './pages/RepoPage';
import UserPage from './pages/UserPage';

export default (
  <Route name='explore' handler={App} >
    <Route name='homepage' path='/' handler={Homepage} />
    <Route name='login' path='/login' handler={Login} />
    <Route name='follower' path='/follower/:user' handler={Follower} />
    <Route name='register' path='/register' handler={Register} />
    <Route name='repo' path='/:login/:name' handler={RepoPage} />
    <Route name='user' path='/:login' handler={UserPage} />
  </Route>
);
