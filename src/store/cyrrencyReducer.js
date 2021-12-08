const defaultState = {
 base: [],
 arr: [],
 option: []
}

export const currencyReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ADD_ARR':
      return {...state, arr: action.payload}
    case 'ADD_BASE':
    return {...state, base: action.payload}
    case 'ADD_OPTION':
      return {...state, option: action.payload}
    default: return state
  }
}