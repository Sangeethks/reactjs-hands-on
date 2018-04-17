const initialState = {
  counter: 0,
  addValue: 10,
  minusValue: 8
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
    break;

    case 'DECREMENT':
    return {
      ...state,
      counter: state.counter - 1
    }
    break;

    case 'ADD_COUNTER':
    return {
      ...state,
      counter: state.counter + state.addValue
    }
    break;

    case 'MINUS_COUNTER':
    return {
      ...state,
      counter: state.counter - state.minusValue
    }
    break;

    default:

  }

  return state;
}

export default reducer;
