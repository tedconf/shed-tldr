// @flow
import React from 'react';
import Shed from 'react-shed';
import {
  map,
  compose,
} from 'ramda';
import {
  withStateHandlers,
  pure,
} from 'recompose';
import Scale from 'components/scale';
import Layout from 'components/layout';

const scales = [
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

declare type ScaleScreenProps = {
  selectedScale: string,
  onScale: (newScale: string) => void,
  selectedSteps: number,
  onSteps: (newSteps: string) => void,
};

const ScaleScreen = ({
  selectedScale,
  onScale,
  onSteps,
  selectedSteps,
}: ScaleScreenProps): React$Element<> => (
  <Layout>
    <div.shed w="full">
      <div.shed
        d="f"
        flxw="w"
        w="full"
        ai="f-s"
        jc="f-s"
        zi="10"
        pos="r"
        css={{
          position: 'relative',
        }}
      >
        <div.shed
          d="f"
          p="1"
        >
          <span.shed
            tt="u"
            d="i"
            mr="1"
            fw="700"
            c="gray-d"
          >
            Scale:
          </span.shed>
          <select
            onChange={onScale}
            defaultValue={selectedScale}
            css={{
              boxShadow: 'inset 0 0 1px currentColor',
            }}
          >
            {map(i => (
              <option
                value={i}
                key={i}
              >
                {i}
              </option>
            ))(scales)}
          </select>
        </div.shed>
        <div.shed
          d="f"
          p="1"
        >
          <span.shed
            tt="u"
            d="i"
            mr="1"
            fw="700"
            c="gray-d"
          >
            Steps:
          </span.shed>
          { /* eslint-disable jsx-a11y/no-autofocus */}
          <input
            autoFocus
            key="scaleInput"
            type="number"
            onChange={onSteps}
            value={selectedSteps}
          />
          { /* eslint-enable jsx-a11y/no-autofocus */}
        </div.shed>
      </div.shed>
      <div.shed w="full">
        <Scale
          key="currentScale"
          name={selectedScale}
          steps={selectedSteps}
        />
      </div.shed>
    </div.shed>
  </Layout>
);

export default compose(
  withStateHandlers(
    ({
      initialScale = 'minor third',
      initialSteps = '10',
    }) => ({
      selectedScale: initialScale,
      selectedSteps: initialSteps,
    }),
    {
      onScale: () => evt => ({
        selectedScale: evt.target.value,
      }),
      onSteps: () => ({ target: { value } }) => ({
        selectedSteps: value,
      }),
    },
  ),
  pure,
)(ScaleScreen);
