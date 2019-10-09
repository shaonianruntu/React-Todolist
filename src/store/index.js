/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-08 17:25:39
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-09 09:17:20
 */
import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
