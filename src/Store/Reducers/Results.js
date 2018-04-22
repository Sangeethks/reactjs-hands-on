import Actions from '@/Store/Actions/Actions'

const initialState = {
  savedResults: []
}

// Initializing reducer with initial state
const reducer = (state = initialState, action) => {
  // Mapping Actions
  switch (action.type) {
    case Actions.SAVE_RESULTS: {
      let savedResults = [...state.savedResults]
      if (state.counter !== 0) {
        savedResults = state.savedResults.concat({ value: action.result })
      }
      return { ...state, savedResults }
    }

    case Actions.DELETE_RESULTS: {
      let savedResults = [...state.savedResults]
      savedResults.splice(action.index, 1)
      return { ...state, savedResults }
    }

    default:
      return state;
  }

}

export default reducer;
