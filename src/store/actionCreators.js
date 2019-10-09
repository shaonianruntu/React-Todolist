/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-09 13:42:02
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-09 13:48:27
 */
import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM
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
