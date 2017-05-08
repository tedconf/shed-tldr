// @flow
import React from 'react';
import {
  ConnectedRouter as Router,
} from 'react-router-redux';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';

const Application = ({ store, history }: {
  store: Store,
  history: History,
}) => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (<h1>welcome home</h1>)}
        />
      </Switch>
    </Router>
  </Provider>
);

export default Application;
