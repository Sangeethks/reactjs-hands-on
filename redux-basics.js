const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  count: 0
}

// Reducers
// Create reducer first
const reducer = (state = initialState, action) => {
  // console.log('[redux-basics -> reducer -> action type ]', action.type);

  switch (action.type) {
    case 'INCREMENT_COUNT':
    return {
      ...state,
      count: state.count + 1
    }
    break;

    case 'ADD_COUNT':
    return {
      ...state,
      count: state.count + action.value
    }
    break;

    default:
    return state;
  }
};

// Store
const Store = createStore(reducer);
// console.log('[redux-basics -> Store ]', Store.getState());

// Subscription
Store.subscribe(() => {
  console.log('[redux-basics -> subscribe ]', Store.getState());
})

// Actions
Store.dispatch({ type: 'INCREMENT_COUNT' });
Store.dispatch({ type: 'ADD_COUNT', value: 10 });

console.log('[redux-basics -> Store ]', Store.getState());
