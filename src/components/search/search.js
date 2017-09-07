// @flow
import React from 'react';
import Shed from 'react-shed';
import Downshift from 'downshift';
import { withTheme } from 'theming';
import matchSorter from 'match-sorter';
import {
  compose,
  withStateHandlers,
} from 'recompose';
import ResultsList from 'components/results-list';
import parsedShed from 'components/parse-css';

declare type SearchComponent = {
  items: Array<*>,
  theme: {
    colors: *,
    fonts: *,
    sizes: *,
  },
  onStateChange: (val: string) => void,
};

const getItems = value => (
  value
    ? matchSorter(parsedShed, value, {
      keys: [
        'selector',
        item => item.rules.map(({ prop }) => prop),
      ],
    })
    : ''
);

const Search = (
  {
    items,
    theme,
    onStateChange,
  }: SearchComponent,
) => (
  <Downshift onStateChange={onStateChange}>
    {({
      getInputProps,
      getItemProps,
      isOpen,
      highlightedIndex,
    }) => (
      <div>
        <input
          css={{
            width: '100%',
            border: `1px solid ${theme.colors['gray-l']}`,
            borderRadius: theme.sizes['z.4'],
            fontFamily: theme.fonts.code,
            padding: theme.sizes['z.2'],
          }}
          {...getInputProps({
            isOpen,
            placeholder: 'Search for a CSS property name or class name',
          })}
        />
        <div.shed
          h="20"
          o="s"
          mx=".6"
        >
          <ResultsList
            results={items}
            itemProps={getItemProps}
            highlightedIndex={highlightedIndex}
          />
        </div.shed>
      </div>
    )}
  </Downshift>
);

const ThemedSearch = withTheme(Search);

const ConnectedSearch = compose(
  withStateHandlers(
    ({ initialItems = '' }) => ({
      items: initialItems,
    }),
    {
      onStateChange: () => ({ inputValue }) => ({
        items: getItems(inputValue),
      }),
    },
  ),
)(ThemedSearch);

export {
  ConnectedSearch as default,
  ThemedSearch as Component,
};
