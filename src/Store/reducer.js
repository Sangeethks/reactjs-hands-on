import ActionTypes from '@/Store/ActionTypes'

const initialState = {
  counter: 0,
  addValue: 20,
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

    case ActionTypes.SAVE_RESULTS: {
      let savedResults = [...state.savedResults]

      if (state.counter !== 0) {
        savedResults = state.savedResults.concat({ value: state.counter })
      }

      return {
        ...state,
        savedResults
      }
    }

    case ActionTypes.DELETE_RESULTS: {
      let savedResults = [...state.savedResults]

      // console.log('[reducer -> DELETE_RESULTS -> index ]', action.index);

      savedResults.splice(action.index, 1)

      return {
        ...state,
        savedResults
      }
    }

    default:

  }

  return state;
}

export default reducer;
