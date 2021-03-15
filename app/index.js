import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store.js';
import 'spectre.css';

import AppHeader from './container/AppHeader/AppHeader';
import HomePage from './container/HomePage/HomePage';
import ChallengeRouter from './container/RouterComponent/ChallengeRouter/ChallengeRouter';
import TagRouter from './container/RouterComponent/TagRouter/TagRouter';

import NotFound from './component/NotFound/NotFound';

const App = () => (
  <Provider store={store}>
    <Router>
      <AppHeader />
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/challenge'>
          <ChallengeRouter />
        </Route>
        <Route path='/tag'>
          <TagRouter />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
