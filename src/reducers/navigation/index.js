import {NAVIGATION_OPEN, NAVIGATION_CLOSE, NAVIGATION_TOGGLE, NAVIGATION_SET_PAGE} from './ActionTypes';

const initialState = {
  isOpen: false,
  page: 'Blue Infinity'
};

const navigation = (state = initialState, action) => {
  switch (action.type) {
    case NAVIGATION_OPEN: {
      return {
        ...state,
        isOpen: true
      }
    }
    case NAVIGATION_CLOSE: {
      return {
        ...state,
        isOpen: false
      }
    }
    case NAVIGATION_TOGGLE: {
      return {
        ...state,
        isOpen: !state.isOpen
      }
    }
    case NAVIGATION_SET_PAGE: {
      return {
        ...state,
        page: action.page
      }
    }
    default:
      return state;
  }
};

export default navigation;
