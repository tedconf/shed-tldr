import postcss from 'postcss';
import {
  compose,
  evolve,
  filter,
  map,
  prop,
  replace,
} from 'ramda';

/**
 * All Styles
 */
const SHED_CSS = require('!raw-loader!shed-css'); // eslint-disable-line

const cssRoot = postcss.parse(SHED_CSS);

export default compose(
  map(
    evolve({
      selector: compose(
        replace(/^\./, ''),
        replace(/,.*$/, ''),
        replace(/\\/g, ''),
        replace(/(\t|\n)/g, ''),
      ),
    }),
  ),
  filter(x => x.selector !== ':root'),
  map(x => ({
    selector: x.selector,
    rules: map(y => ({
      prop: y.prop,
      value: y.value,
    }))(prop('nodes')(x)),
  })),
  filter(x => x.type === 'rule'),
  prop('nodes'),
)(cssRoot);
