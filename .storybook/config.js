import React from 'react';
import Shed from 'react-shed';
import {
  configure,
  addDecorator,
} from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { ThemeProvider } from 'theming';
import { createTheme } from 'react-shed';
import { THEME as TED_THEME } from 'components/branding';
import 'components/reset/index.css';
import pkg from '../package.json';

setOptions({
  name: pkg.name,
  url: pkg.repository,
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: true,
});

const theme = createTheme(TED_THEME);

const themed = (storyFn) => (
  <ThemeProvider theme={theme}>
    <div.shed ff="sans">
      {storyFn()}
    </div.shed>
  </ThemeProvider>
);

addDecorator(themed);

const req = require.context('../src/components', true, /\.story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
