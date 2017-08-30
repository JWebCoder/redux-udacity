import {combineReducers} from 'redux'
import categories from './categories'
import posts from './posts'

export default function createReducer() {
  return combineReducers({
    categories,
    posts
  })
}
