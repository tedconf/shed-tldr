// @flow
import React from 'react';
import 'components/fonts/helvetica/index.css';

declare type LogoComponent = {
  color: 'red' | 'black' | 'white',
};

const THEME = {
  sizes: 'minor third',
  steps: 31,
  colors: {
    black: '#111111',
    'gray-dd': '#333333',
    'gray-d': '#666666',
    gray: '#999999',
    'gray-l': '#CCCCCC',
    'gray-ll': '#F6F6F6',
    white: '#FFFFFF',
    red: '#E62B1E',
    orange: '#FFAC00',
  },
  fonts: {
    sans: '"Helvetica Neue Custom", system',
  },
};

/* eslint-disable react/no-danger */
const Logo = ({
  color = 'red',
}: LogoComponent) => {
  const getColorFromTheme = colorName => THEME.colors[colorName] || colorName;

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 92 54"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      dangerouslySetInnerHTML={{
        __html: `
          <title>TED</title>
          <rect x="0" y="0" fill="none" />
          <path
            d="M21.244 21.053h-6.761V14.85h21.012v6.203h-6.762V39.15h-7.489V21.053zm15.414-6.203h20.43v6.203H44.147v2.992h12.941v5.837H44.147v3.065h12.941v6.203h-20.43v-24.3zm21.666 0h12.287c8.071 0 10.906 5.984 10.906 12.114 0 7.443-3.926 12.186-12.36 12.186H58.324v-24.3zm7.489 18.097h2.908c4.653 0 5.308-3.794 5.308-6.056 0-1.533-.509-5.765-5.89-5.765H65.74l.073 11.821z"
            fill="${getColorFromTheme(color)}"
          />
        `,
      }}
    />
  );
};
/* eslint-enable react/no-danger */

export {
  Logo,
  THEME,
};

