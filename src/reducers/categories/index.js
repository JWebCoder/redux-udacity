import {SET_CATEGORIES} from './ActionTypes';

const initialState = {
  items: [],
  loaded: false
};

const navigation = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES: {
      return {
        items: action.categories,
        loaded: true
      };
    }
    default:
      return state;
  }
};

export default navigation;
