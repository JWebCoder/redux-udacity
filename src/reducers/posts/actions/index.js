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

export function deletePost(postId) {
  return {type: types.DELETE_POST, postId}
}

export function setCurrentPostFromStore(postId) {
  return {type: types.SET_CURRENT_POST_FROM_STORE, postId}
}

export function updateComment(comment, postId) {
  return {type: types.UPDATE_COMMENT, comment, postId}
}

export function deleteComment(commentId, postId) {
  return {type: types.DELETE_COMMENT, commentId, postId}
}

export function toggleEditComment(id) {
  return {type: types.TOOGLE_EDIT_COMMENT, id}
}
