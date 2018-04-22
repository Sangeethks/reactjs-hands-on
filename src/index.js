import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
// To create redux store
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// To connect react to redux
import { Provider } from 'react-redux';
// For asynchronous action dispatch
import thunk from 'redux-thunk';

// import registerServiceWorker from './registerServiceWorker';

// Defining Reducer to initialize the store
import CounterReducer from './Store/Reducers/Counter';
import ResultsReducer from './Store/Reducers/Results';
let Reducer = combineReducers({
  counter: CounterReducer,
  results: ResultsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Creating the Store
const store = createStore(Reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
// registerServiceWorker();
