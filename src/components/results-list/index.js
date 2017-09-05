import React from 'react';
import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./results-list'),
  LoadingComponent: () => <div>Loading Results List…</div>,
});

export {
  default as ConnectedComponent,
  Component,
} from './results-list';
