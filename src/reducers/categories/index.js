import {SET_CATEGORIES} from './ActionTypes'

const initialState = {
  items: []
}

const navigation = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES: {
      return {
        items: action.categories
      };
    }
    default:
      return state
  }
}

export default navigation
