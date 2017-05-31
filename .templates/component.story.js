import React from 'react';
import Shed from 'react-shed';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';
import { Component } from './';

const stories = storiesOf('{{titleCase componentName}}', module);
stories.addDecorator(withKnobs);
stories.addDecorator(centered);

stories
  .add('{{titleCase componentName}}', () => (
    <{{pascalCase componentName}} />
  ))
;

