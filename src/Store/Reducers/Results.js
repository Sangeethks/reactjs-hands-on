import ActionTypes from '@/Store/ActionTypes'

const initialState = {
  counter: 0,
  addValue: 20,
  minusValue: 8,
}

// Initializing reducer with initial state
const reducer = (state = initialState, action) => {
  // Mapping Actions
  switch (action.type) {
    case ActionTypes.INCREMENT:
    return {
      ...state,
      counter: state.counter + 1
    }

    case ActionTypes.DECREMENT:
    return {
      ...state,
      counter: state.counter - 1
    }

    case ActionTypes.ADD_COUNTER:
    return {
      ...state,
      counter: state.counter + state.addValue
    }

    case ActionTypes.MINUS_COUNTER:
    return {
      ...state,
      counter: state.counter - state.minusValue
    }
  }

  return state;
}

export default reducer;
