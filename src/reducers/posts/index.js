import {SET_POSTS} from './ActionTypes'

const initialState = []

const posts = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS: {
      return {
        loaded: true,
        items: action.posts
      }
    }
    default:
      return state
  }
}

export default posts;
