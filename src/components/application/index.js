// @flow
import React from 'react';
import Shed, {
  createTheme,
  /* eslint-disable no-unused-vars */
  reset,
  /* eslint-enable no-unused-vars */
} from 'react-shed';
import {
  ConnectedRouter as Router,
} from 'react-router-redux';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { THEME as TED_THEME } from 'components/branding';

const theme = createTheme(TED_THEME);

const Application = ({ store, history }: {
  store: Store,
  history: History,
}) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <div.shed
        ff="sans"
        h="100vh"
      >
        <Router history={history}>
          <Switch>
            <Route
              exact
              path="/"
            >
              <div>
                <h1.shed
                  f="3"
                  fw="400"
                  c="red"
                >
                  Hello!
                </h1.shed>
              </div>
            </Route>
          </Switch>
        </Router>
      </div.shed>
    </ThemeProvider>
  </Provider>
);

export default Application;
