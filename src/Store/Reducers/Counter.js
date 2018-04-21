import ActionTypes from '@/Store/ActionTypes'

const initialState = {
  savedResults: []
}

// Initializing reducer with initial state
const reducer = (state = initialState, action) => {
  // Mapping Actions
    case ActionTypes.SAVE_RESULTS: {
      let savedResults = [...state.savedResults]
      if (state.counter !== 0) {
        savedResults = state.savedResults.concat({ value: state.counter })
      }
      return { ...state, savedResults }
    }

    case ActionTypes.DELETE_RESULTS: {
      let savedResults = [...state.savedResults]
      savedResults.splice(action.index, 1)
      return { ...state, savedResults }
    }
  }

  return state;
}

export default reducer;
