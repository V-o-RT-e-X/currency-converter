const defaultState = {
  from: [],
  result: []
}

export const converterReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ADD_FROM':
      return { ...state, from: action.payload }
      case 'ADD_RESULT':
      return { ...state, result:  action.payload }
    default: return state
  }
}