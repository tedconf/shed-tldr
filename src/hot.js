import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import Application from 'components/application';
import store, { history } from 'config/create-store';

const rootEl = document.getElementById('root');
const render = (Component) => {
  /* eslint-disable global-require */
  const RedBox = require('redbox-react').default;
  /* eslint-enable global-require */
  try {
    ReactDOM.render(
      <AppContainer>
        <Component
          store={store}
          history={history}
        />
      </AppContainer>,
      rootEl,
    );
  } catch (e) {
    render(<RedBox error={e} />, rootEl);
    throw new Error(e);
  }
};

render(Application);

if (module.hot) {
  module.hot.accept('components/application', () => render(Application));
}
