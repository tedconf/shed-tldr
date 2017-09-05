// @flow
import React from 'react';
import Shed from 'react-shed';
import { map } from 'ramda';
import VirtualList from 'react-tiny-virtual-list';

declare type Result = {
  rules: Array<{
    prop: string,
    value: string
  }>,
  selector: string,
};

type ResultsListComponent = {
  results: Array<Result>,
};

const ResultsList = ({
  results = [],
}: ResultsListComponent) => (
  <div.shed
    ff="code"
    w="full"
  >
    <VirtualList
      width="100%"
      height={600}
      itemCount={results.length}
      itemSize={50} // Also supports variable heights (array or function getter)
      renderItem={({ index, style }) => (
        <div.shed
          key={index}
          css={style}
          d="f"
          jc="s-b"
          w="full"
          ai="c"
          p="2"
          bg={index % 2 !== 0 ? 'white' : 'gray-ll'}
        >
          <div.shed
            flxg="1"
            w="1/4"
          >
            {results[index].selector}
          </div.shed>
          <div.shed
            w="3/4"
          >
            {
              map(
                ({
                  prop,
                  value,
                }) => (
                  <div.shed key={`${prop}:${value}`}>
                    {prop}: {value}
                  </div.shed>
                ),
              )(results[index].rules)
            }
          </div.shed>
        </div.shed>
      )}
    />
  </div.shed>
);

export {
  ResultsList as default,
  ResultsList as Component,
};
