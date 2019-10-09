/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-08 17:28:02
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-09 14:37:01
 */
import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION
} from "./actionTypes";

const defaultState = {
  inputValue: "123",
  list: [1, 2]
};

// reducer 可以接受 state，但是绝对不能修改 state
// 纯函数指的是，给定固定的输入，就一定会有固定的输出，而且不会有任何副作用。
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state)); // 深拷贝
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state)); // 深拷贝
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  }
  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  if (action.type === INIT_LIST_ACTION) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data;
    return newState;
  }
  return state;
};
