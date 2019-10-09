/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-09 13:42:02
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-09 16:03:35
 */
import axios from "axios";

import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION,
  GET_INIT_LIST
} from "./actionTypes";

export const getInputChangeAction = value => ({
  type: CHANGE_INPUT_VALUE,
  value: value
});

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
});

export const getDeleteItemAction = index => ({
  type: DELETE_TODO_ITEM,
  index: index
});

export const initListAction = data => ({
  type: INIT_LIST_ACTION,
  data: data
});

export const getInitList = () => ({
  type: GET_INIT_LIST
});

export const getTodoList = () => {
  return dispatch => {
    axios
      .get("list.json")
      .then(res => {
        const data = res.data;
        const action = initListAction(data);
        dispatch(action); // 此时 action 是一个对象，就会作用到 store 上
      })
      .catch(() => {
        alert("error");
      });
  };
};
