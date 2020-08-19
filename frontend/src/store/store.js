import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

function getMiddleware() {
  return applyMiddleware(thunk);
}

export const store = createStore(
  reducer,
  getMiddleware()
);