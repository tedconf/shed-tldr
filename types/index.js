/* eslint-disable */
import { Store } from 'flow-typed/npm/redux_v3.x.x';

declare type GetState = () => AppState;

declare type AppState = {
  router: any,
};

declare type Action = {
  type: string,
  payload?: any,
}

/* eslint-enable */
