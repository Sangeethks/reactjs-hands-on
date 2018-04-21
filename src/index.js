import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
// To create redux store
import { createStore, combineReducers } from 'redux';
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

// Creating the Store
const store = createStore(Reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
// registerServiceWorker();
