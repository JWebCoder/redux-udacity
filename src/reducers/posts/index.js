import {SET_POSTS, SET_POST, SET_ORDER} from './ActionTypes'

const initialState = {
  items: [],
  orderType: 'timestamp'
}

const sort = (posts, sortType) => {
  const result = posts.sort(
    (a, b) => {
      return b[sortType] - a[sortType]
    }
  )
  return result
}

const posts = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS: {
      const newItems = sort(action.posts, state.sortType)
      return {
        ...state,
        items: newItems
      }
    }
    case SET_POST: {
      const items = state.items.map(
        item => {
          if (item.id === action.post.id) {
            return action.post
          }
          return item
        }
      )
      return {
        items: items
      }
    }
    case SET_ORDER: {
      const newItems = sort(state.items, action.orderType)
      return {
        ...state,
        items: newItems,
        orderType: action.orderType
      }
    }
    default:
      return state
  }
}

export default posts
