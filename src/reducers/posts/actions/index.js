import * as types from '../ActionTypes'

export function setPosts(posts) {
  return {type: types.SET_POSTS, posts}
}

export function setPost(post) {
  return {type: types.SET_POST, post}
}

export function setOrder(order) {
  return {type: types.SET_ORDER, orderType: order}
}

export function setCurrentPost(current) {
  return {type: types.SET_CURRENT_POST, current}
}
