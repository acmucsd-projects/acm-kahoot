import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

function getMiddleware() {
  return applyMiddleware(thunk);
}

export const store = createStore(
  reducer,
  compose(
    getMiddleware(),
    window.devToolsExtension ? window.devToolsExtension : (f) => f
  )
);