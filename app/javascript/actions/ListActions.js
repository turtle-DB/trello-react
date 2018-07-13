import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function createListRequest() {
  return { type: types.CREATE_LIST_REQUEST };
}

export function createListSuccess(list) {
  return { type: types.CREATE_LIST_SUCCESS, list: list };
}

export function createList(boardId, list, callback) {
  return function(dispatch) {
    dispatch(createListRequest());
    apiClient.createList(boardId, list, newList => {
      dispatch(createListSuccess(newList))

      if (callback) { callback(newList); }
    })
  }
}
