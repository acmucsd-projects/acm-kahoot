import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function getMiddleware() {
  return applyMiddleware(thunk);
}

export const store = createStore(reducer, composeEnhancers(
    getMiddleware()
));

