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
import { Component as SearchBox } from './';

const stories = storiesOf('Search Box', module);
stories.addDecorator(withKnobs);
stories.addDecorator(centered);

stories
  .add('Search Box', () => (
    <SearchBox sampleProp={text('Sample Prop')} />
  ))
;

