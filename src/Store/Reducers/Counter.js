import Actions from '@/Store/Actions/Actions'

const initialState = {
  counter: 0,
  addValue: 20,
  minusValue: 8,
}

// Initializing reducer with initial state
const reducer = (state = initialState, action) => {
  // Mapping Actions
  switch (action.type) {
    case Actions.INCREMENT:
    return {
      ...state,
      counter: state.counter + 1
    }

    case Actions.DECREMENT:
    return {
      ...state,
      counter: state.counter - 1
    }

    case Actions.ADD_COUNTER:
    return {
      ...state,
      counter: state.counter + state.addValue
    }

    case Actions.MINUS_COUNTER:
    return {
      ...state,
      counter: state.counter - state.minusValue
    }

    default:
      return state;
  }

}

export default reducer;
