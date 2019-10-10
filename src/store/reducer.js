/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-10 08:56:25
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-10 09:24:32
 */

const defaultState = {
  inputValue: "hello",
  list: []
};

export default (state = defaultState, action) => {
  if (action.type === "change_input_value") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.inputValue;
    return newState;
  }
  return state;
};
