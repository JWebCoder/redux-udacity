import * as types from '../ActionTypes';

export function onCloseMenu() {
  return {type: types.NAVIGATION_CLOSE};
}

export function onClickMenu() {
  return {type: types.NAVIGATION_TOGGLE};
}

export function onOpenMenu() {
  return {type: types.NAVIGATION_OPEN};
}

export function onSetPage(page) {
  return {
    type: types.NAVIGATION_SET_PAGE,
    page
  };
}
