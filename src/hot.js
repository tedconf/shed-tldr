import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import store, { history } from 'config/create-store';
import Application from 'components/application';


const hotRender = (root) => {
  /* eslint-disable global-require */
  const RedBox = require('redbox-react').default;
  /* eslint-enable global-require */
  try {
    render(
      <AppContainer>
        <Application
          store={store}
          history={history}
        />
      </AppContainer>,
      root,
    );
  } catch (e) {
    render(<RedBox error={e} />, root);
    throw new Error(e);
  }
};

hotRender(document.getElementById('root'));

if (module.hot) {
  module.hot.accept('components/application', hotRender);
}
