// @flow
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { createReducer } from 'redux-create-reducer';
import actionTypes from './action-types';

export type ApplicationState = {
  initialized: boolean,
};

const getDefaultState = (): ApplicationState => ({
  initialized: false,
});

const reducer = createReducer(getDefaultState(), {
  [actionTypes.INITIALIZE]: (
    state: ApplicationState,
  ) => ({
    ...state,
    initialized: true,
  }),
});

export default combineReducers({
  app: reducer,
  router: routerReducer,
});
