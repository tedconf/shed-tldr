import React from 'react';
import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./home'),
  LoadingComponent: () => <div>Loading Home…</div>,
});

export {
  default as ConnectedComponent,
  Component,
} from './home';

