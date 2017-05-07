{{#ifItem 'asynch' component_features}}
import React from 'react';
import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./{{kebabCase component_name}}'),
  LoadingComponent: () => <div>Loading {{titleCase component_name}}…</div>,
});
{{else}}
export * from './{{kebabCase component_name}}.js';
{{/ifItem}}
