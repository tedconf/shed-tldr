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

const ScaleFontItem = (
  size: number,
  index: number,
) => (
  <li.shed
    key={size}
    d="f"
    c="blue"
    jc="f-e"
    lh="d"
  >
    <span.shed
      d="i-b"
      px=".5"
      style={{
        fontSize: `${size}rem`,
      }}
    >
      f:{toString(index)}
    </span.shed>
  </li.shed>
);

const ScaleItem = (
  size: number,
  index: number,
) => (
  <li.shed
    key={size}
    d="b"
    bg="blue"
    c={index < 1 ? 'blue' : 'white'}
    flxg="1"
    lh="d"
    style={{
      height: `${size}rem`,
    }}
  >
    <span.shed
      d="i-b"
      px=".5"
      py=".10"
    >
      {toString(index)}
    </span.shed>
  </li.shed>
);

const Scale = ({
  name,
  steps,
}: ScaleComponent) => (
  <div.shed
    w="full"
    px="2"
  >
    <section.shed
      ox="s"
    >
      <h2.shed
        tt="u"
        fw="700"
        f="2"
      >
        sizes
      </h2.shed>
      <ol.shed
        w="full"
        lst="none"
        my="0"
        pl="0"
        d="f"
      >
        {mapIndexed(ScaleItem)(createScale(name, steps))}
      </ol.shed>
    </section.shed>
    <section.shed
      ox="s"
      oy="h"
    >
      <h2.shed
        tt="u"
        fw="700"
        f="2"
      >
        font sizes
      </h2.shed>
      <ol.shed
        d="f"
        lst="none"
        my="0"
        pl="0"
        flxw="w"
      >
        {mapIndexed(ScaleFontItem)(createScale(name, steps))}
      </ol.shed>
    </section.shed>
  </div.shed>
);

export {
  Scale as default,
  Scale as Component,
  createScale,
};
