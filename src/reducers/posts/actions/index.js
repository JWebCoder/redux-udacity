import * as types from '../ActionTypes'

export function setPosts(posts) {
  return {type: types.SET_POSTS, posts}
}
