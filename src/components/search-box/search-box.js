// @flow
import React from 'react';
import Shed from 'react-shed';
import {
  compose,
  withStateHandlers,
} from 'recompose';
import styled from 'react-emotion';

const SearchInput = styled('input')({
  border: '1px solid rgba(0,0,0,.2)',
  outline: 'none',
  width: '100%',
  p: '.2',
}, ({ theme }) => ({
  fontFamily: theme.fonts.code,
}));

declare type SearchBoxComponent = {
  value?: string,
  onSearchChange: (value: string) => void,
};

const SearchBox = ({
  value = '',
  onSearchChange,
}: SearchBoxComponent) => (
  <SearchInput
    placeholder="search for a CSS property name or class name"
    defaultValue={value}
    onChange={evt => onSearchChange(evt.currentTarget.value)}
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
)(SearchBox);

export {
  ConnectedSearchBox as default,
  SearchBox as Component,
};
