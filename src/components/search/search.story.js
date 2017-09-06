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
import { Component as Search } from './';

const stories = storiesOf('Search', module);
stories.addDecorator(withKnobs);
stories.addDecorator(centered);

stories
  .add('Search', () => (
    <Search sampleProp={text('Sample Prop')} />
  ))
;

