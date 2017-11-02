import React from 'react';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import { render } from 'react-dom';
import Layout from './containers/Layout';
import SearchContainer from './containers/SearchContainer';
import MovieContainer from './containers/MovieContainer';
import LoginContainer from './containers/LoginContainer';
const route =(
  <Router history={hashHistory}>
    <Route path="/">
      <Route path='/home' component={Layout} />
      <Route path='/login' component={LoginContainer} />
      <Route path='/movie/:id' component={MovieContainer} />
      <IndexRedirect to="/home" />
    </Route>
  </Router>
)


render(route, document.getElementById('app'))
