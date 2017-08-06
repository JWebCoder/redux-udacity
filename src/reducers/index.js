import {combineReducers} from 'redux';
import navigation from './navigation'

export default function createReducer() {
  return combineReducers({
    navigation
  })
}
