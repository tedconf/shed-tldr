import React from 'react';
import Shed from 'react-shed';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  // boolean,
  // number,
  // color,
  // object,
  // select,
  // date,
} from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';
import { Component as {{pascalCase componentName}} } from './';

const stories = storiesOf('{{titleCase componentName}}', module);
stories.addDecorator(withKnobs);
stories.addDecorator(centered);

stories
  .add('{{titleCase componentName}}', () => (
    <{{pascalCase componentName}} sampleProp={text('Sample Prop')} />
  ))
;

