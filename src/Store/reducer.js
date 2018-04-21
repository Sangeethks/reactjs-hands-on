const initialState = {
  counter: 0,
  addValue: 10,
  minusValue: 8,
  savedResults: []
}

// Initializing reducer with initial state
const reducer = (state = initialState, action) => {
  // console.log('[reducer -> action ]', action);
  // console.log('[reducer -> counter ]', state.counter);
  // console.log('[reducer -> addValue ]', state.addValue);

  // Mapping Actions
  switch (action.type) {
    case 'INCREMENT':
    return {
      ...state,
      counter: state.counter + 1
    }

    case 'DECREMENT':
    return {
      ...state,
      counter: state.counter - 1
    }

    case 'ADD_COUNTER':
    return {
      ...state,
      counter: state.counter + state.addValue
    }

    case 'MINUS_COUNTER':
    return {
      ...state,
      counter: state.counter - state.minusValue
    }

    case 'SAVE_RESULTS':
    let savedResults = state.savedResults

    if (state.counter !== 0) {
      savedResults = state.savedResults.concat({ value: state.counter })
    }

    return {
      ...state,
      savedResults
    }

    default:

  }

  return state;
}

export default reducer;
