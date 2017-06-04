import {
  createStore,
  applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  routerMiddleware,
} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import { reducer as applicationReducer } from 'components/application';

const history = createHistory();

const middleware = [
  routerMiddleware(history),
  thunk,
];

const store = createStore(
  applicationReducer,
  undefined,
  composeWithDevTools({
    actionCreators: {
    },
    maxAge: 100,
    serialize: true,
    autoPause: true,
    test: false,
  })(applyMiddleware(...middleware)),
);


if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('components/application', () => {
    /* eslint-disable global-require */
    store.replaceReducer(require('components/application').module);
    /* eslint-enable global-require */
  });
}

export {
  store as default,
  history,
};
