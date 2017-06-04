// @flow
import React from 'react';
import Shed, {
  createTheme,
} from 'react-shed';
import {
  ConnectedRouter as Router,
} from 'react-router-redux';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { ThemeProvider } from 'glamorous';
import { Provider } from 'react-redux';
import { THEME as TED_THEME } from 'components/branding';
import 'components/reset/index.css';
import HomeScreen from 'screens/home';

const theme = createTheme(TED_THEME);

const Application = (
  {
    store,
    history,
  }: {
    store: Store,
    history: History,
  },
): React$Element<*> => (
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
              <HomeScreen />
            </Route>
          </Switch>
        </Router>
      </div.shed>
    </ThemeProvider>
  </Provider>
);

export default Application;
export { default as reducer } from './module';
