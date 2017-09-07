import React from 'react';
import Shed from 'react-shed';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  // boolean,
  number,
  // color,
  // object,
  select,
  // date,
} from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';
import { Component as Scale } from './';

const options = [
  'minor second',
  'major second',
  'minor third',
  'major third',
  'augmented fourth',
  'perfect fifth',
  'minor sixth',
  'golden',
  'phi',
  'major sixth',
  'minor seventh',
  'major seventh',
  'octave',
  'major tenth',
  'major eleventh',
  'major twelfth',
  'double octave',
];

const stories = storiesOf('Scale', module);
stories.addDecorator(withKnobs);
stories.addDecorator(centered);

stories
  .add('Scale', () => (
    <Scale
      name={select('scale', options, 'minor second')}
      steps={number('steps', 30)}
    />
  ))
;

