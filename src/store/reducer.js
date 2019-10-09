import ActionButton from "antd/lib/modal/ActionButton";

/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-08 17:28:02
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-09 13:31:26
 */
const defaultState = {
  inputValue: "123",
  list: [1, 2]
};

// reducer 可以接受 state，但是绝对不能修改 state
export default (state = defaultState, action) => {
  if (action.type === "change_input_value") {
    const newState = JSON.parse(JSON.stringify(state)); // 深拷贝
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === "add_todo_item") {
    const newState = JSON.parse(JSON.stringify(state)); // 深拷贝
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  }
  if (action.type === "delete_todo_item") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  return state;
};

// const data = [
//   "Racing car sprays burning fuel into crowd.",
//   "Japanese princess to wed commoner.",
//   "Australian walks 100km after outback crash.",
//   "Man charged over missing wedding girl.",
//   "Los Angeles battles huge wildfires."
// ];
