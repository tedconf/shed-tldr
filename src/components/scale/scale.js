// @flow
import React from 'react';
import Shed from 'react-shed';
import {
  addIndex,
  compose,
  curry,
  inc,
  map,
  prepend,
  times,
  toString,
} from 'ramda';
import ms from 'modularscale';

const mapIndexed = addIndex(map);

const createScale = curry((name, steps) => (
  compose(
    prepend(0),
    times(
      compose(
        curry(
          val => ms(inc(val), name),
        ),
      ),
    ),
  )(steps)
));


declare type ScaleComponent = {
  name: string,
  steps: number,
};

const ScaleItem = (
  size: number,
  index: number,
) => (
  <li.shed
    key={size}
    d="b"
    bg="red"
    c={index < 1 ? 'red' : 'white'}
    css={{
      width: `${size}rem`,
    }}
  >
    <span.shed
      d="i-b"
      py="1"
      pl=".5"
    >
      {toString(index)}
    </span.shed>
  </li.shed>
);

const Scale = ({
  name,
  steps,
}: ScaleComponent) => (
  <div.shed>
    <h1.shed>
      {name}
    </h1.shed>
    <ol.shed
      w="full"
      lst="none"
      my="0"
      pl="0"
    >
      {mapIndexed(ScaleItem)(createScale(name, steps))}
    </ol.shed>
  </div.shed>
);

export {
  Scale as default,
  Scale as Component,
  createScale,
};
