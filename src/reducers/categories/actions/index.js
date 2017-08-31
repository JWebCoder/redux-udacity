import * as types from '../ActionTypes';

export function setCategories(categories) {
  return {type: types.SET_CATEGORIES, categories};
}
