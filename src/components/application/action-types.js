import createActions, {
  SYNC,
  // ASYNC,
} from 'config/create-actions';

const actionTypes = createActions(
  '--APP_NAME--',
  {
    INITIALIZE: SYNC,
  },
);

export default actionTypes;
