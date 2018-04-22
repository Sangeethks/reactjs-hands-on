import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
// To create redux store
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// To connect react to redux
import { Provider } from 'react-redux';

// import registerServiceWorker from './registerServiceWorker';

// Defining Reducer to initialize the store
import CounterReducer from './Store/Reducers/Counter';
import ResultsReducer from './Store/Reducers/Results';
let Reducer = combineReducers({
  counter: CounterReducer,
  results: ResultsReducer
})

const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware] dispatching', action);

      console.log('[Middleware] next state', store.getState());

      return next(action)
    }
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Creating the Store
const store = createStore(Reducer, composeEnhancers(applyMiddleware(logger)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
// registerServiceWorker();
