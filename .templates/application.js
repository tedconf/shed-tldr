// @flow
import React from 'react';
import Shed, {
  createTheme,
} from 'react-shed';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { ThemeProvider } from 'glamorous';
import { THEME as TED_THEME } from 'components/branding';
import 'components/reset/index.css';
import HomeScreen from 'screens/home';

const theme = createTheme(TED_THEME);

const Application = (): React$Element<*> => (
  <ThemeProvider theme={theme}>
    <div.shed
      ff="sans"
      h="100vh"
    >
      <Router>
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
);

export default Application;
