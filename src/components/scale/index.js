import React from 'react';
import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./scale'),
  LoadingComponent: () => <div>Loading Scale…</div>,
});

export {
  default as ConnectedComponent,
  Component,
} from './scale';
