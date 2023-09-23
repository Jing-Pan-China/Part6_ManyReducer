const initialState = {
  filterValue: undefined
}

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER_UPDATE':
      return { ...state, filterValue: action.payload.updatedFilter }
    default:
      // We do not care about other events, return unodified state.
      return state
  }
}

export default filterReducer