import {
  configure,
} from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
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

const req = require.context('../src/components', true, /\.story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
