import { createStore, combineReducers } from 'redux'
import {converterReducer as converter} from './converterReducer'
import {currencyReducer as currency} from './cyrrencyReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
const rootReducer = combineReducers({
  converter,
  currency
})

export const store = createStore(rootReducer, composeWithDevTools())