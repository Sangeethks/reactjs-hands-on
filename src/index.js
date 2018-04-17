import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
// To create redux store
import { createStore } from 'redux';

// import registerServiceWorker from './registerServiceWorker';

// Defining reducer to initialize the store
import reducer from './Store/reducer';
// Creating the Store
const Store = createStore(reducer);

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
