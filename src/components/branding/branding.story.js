import React from 'react';
import Shed from 'react-shed';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';
import { Logo } from './';

const stories = storiesOf('Branding', module);
stories.addDecorator(withKnobs);
stories.addDecorator(centered);

stories
  .add('Logo', () => (
    <Logo
      color={select(
        'color',
        [
          'red',
          'black',
          'white',
        ],
        'red',
      )}
    />
  ))
;
