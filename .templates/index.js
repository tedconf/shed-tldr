// @flow
import React from 'react';
import { render } from 'react-dom';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import Application from 'components/application';

if (process.env.NODE_ENV === 'production') {
  OfflinePluginRuntime.install();
}

render(
  <Application />,
  document.getElementById('root'),
);
