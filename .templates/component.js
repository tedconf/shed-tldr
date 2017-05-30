// @flow
import React from 'react';
import Shed from 'react-shed';
{{#ifItem 'connected' componentFeatures}}
import { connect } from 'react-redux';
import { compose } from 'redux';
{{/ifItem}}

const {{pascalCase componentName}} = ({
  sampleProp,
{{#ifItem 'connected' componentFeatures}}
  sampleEffect,
{{/ifItem}}
}) => (
  <div.shed>
    {sampleProp}
{{#ifItem 'connected' componentFeatures}}
    <button
      onClick={
        () => onEffectExecute(sampleProp)
      }
    >
      Execute Sample Effect
    </button>
{{/ifItem}}
  </div.shed>
);

{{#ifItem 'connected' componentFeatures}}
const mapStateToProps = state => ({
  sampleProp: state.sampleProp,
});

const mapDispatchToProps = {
  onEffectExecute: (attr) => ({
    type: 'SAMPLE_EFFECT',
    payload: attr,
  }),
};

const Connected{{pascalCase ../componentName}} = compose(
  connect(mapStateToProps, mapDispatchToProps),
)({{pascalCase ../componentName}});

{{/ifItem}}
export {
  {{#ifItem 'connected' componentFeatures}}Connected{{/ifItem}}{{pascalCase componentName}} as default,
  {{pascalCase componentName}} as Component,
};
