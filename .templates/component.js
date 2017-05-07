// @flow
import React from 'react';
import Shed from 'react-shed';
{{#ifItem 'connected' component_features}}
import { connect } from 'react-redux';
import { compose } from 'redux';
{{/ifItem}}

const {{pascalCase component_name}} = ({
  sampleProp,
{{#ifItem 'connected' component_features}}
  sampleEffect,
{{/ifItem}}
}) => (
  <div.shed>
    {sampleProp}
{{#ifItem 'connected' component_features}}
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

{{#ifItem 'connected' component_features}}
const mapStateToProps = state => ({
  sampleProp: state.sampleProp,
});

const mapDispatchToProps = {
  onEffectExecute: (attr) => ({
    type: 'SAMPLE_EFFECT',
    payload: attr,
  }),
};

const Connected{{pascalCase component_name}} = compose(
  connect(mapStateToProps, mapDispatchToProps),
)({{pascalCase component_name}});

{{/ifItem}}
export {
  {{#ifItem 'connected' component_features}}Connected{{/ifItem}}{{pascalCase component_name}} as default,
  {{pascalCase component_name}} as Component,
};
