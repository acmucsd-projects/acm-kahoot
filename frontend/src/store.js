import { applyMiddleware, createStore } from 'redux';

import reducer from './reducer';

function getMiddleware() {
  return applyMiddleware();
}

export const store = createStore(reducer, getMiddleware());