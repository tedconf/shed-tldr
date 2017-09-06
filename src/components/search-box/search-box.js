// @flow
import React from 'react';
import Shed from 'react-shed';
import {
  compose,
  withStateHandlers,
} from 'recompose';
import { withTheme } from 'theming';

// const SearchInput = styled('input')`font-size: 16px`;

declare type SearchBoxComponent = {
  value?: string,
  onSearchChange: (value: string) => void,
  theme: {
    fonts: *,
    sizes: *,
    colors: *,
  },
};

const SearchBox = ({
  value = '',
  onSearchChange,
  theme,
}: SearchBoxComponent) => (
  <input
    placeholder="search for a CSS property name or class name"
    defaultValue={value}
    onChange={evt => onSearchChange(evt.currentTarget.value)}
    css={{
      width: '100%',
      border: `1px solid ${theme.colors['gray-l']}`,
      borderRadius: theme.sizes['z.4'],
      fontFamily: theme.fonts.code,
      padding: theme.sizes['z.2'],
    }}
  />
);

const ConnectedSearchBox = compose(
  withStateHandlers(
    ({ initialValue = '' }) => ({
      value: initialValue,
    }),
    {
      onSearchChange: () => newValue => ({
        value: newValue,
      }),
    },
  ),
  withTheme,
)(SearchBox);

export {
  ConnectedSearchBox as default,
  SearchBox as Component,
};
