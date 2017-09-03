import {SET_POSTS, SET_POST, SET_ORDER, SET_CURRENT_POST, SET_CURRENT_POST_FROM_STORE, UPDATE_COMMENT} from './ActionTypes'

const initialState = {
  items: [],
  orderType: 'timestamp',
  current: {}
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
      const newItems = sort(action.posts, state.orderType)
      return {
        ...state,
        items: newItems
      }
    }
    case SET_POST: {
      let updated = false
      let items = state.items.map(
        item => {
          if (item.id === action.post.id) {
            updated = true
            return action.post
          }
          return item
        }
      )
      if (!updated) {
        items.push(action.post)
      }
      return {
        ...state,
        items: items
      }
    }
    case SET_CURRENT_POST: {
      return {
        ...state,
        current: {
          ...action.current
        }
      }
    }
    case SET_CURRENT_POST_FROM_STORE: {
      const current = state.items.filter(
        item => item.id === action.postId
      )[0]
      return {
        ...state,
        current: {
          ...current
        }
      }
    }
    case SET_ORDER: {
      const newItems = sort(state.items, action.orderType)
      return {
        ...state,
        items: [...newItems],
        orderType: action.orderType
      }
    }
    case UPDATE_COMMENT: {
      const items = state.items.map(
        item => {
          if (item.id === action.postId) {
            item.comments = item.comments.map(
              comment => {
                if (comment.id === action.comment.id) {
                  return action.comment
                } else {
                  return comment
                }
              }
            )
          }
          return item
        }
      )

      return {
        ...state,
        items: items
      }
    }
    default:
      return state
  }
}

export default posts
