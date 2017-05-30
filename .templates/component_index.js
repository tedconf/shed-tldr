{{#ifItem 'asynch' componentFeatures}}
import React from 'react';
import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./{{kebabCase ../componentName}}'),
  LoadingComponent: () => <div>Loading {{titleCase ../componentName}}…</div>,
});
{{else}}
export {
  default,
  Component,
} from './{{kebabCase ../componentName}}';
{{/ifItem}}
