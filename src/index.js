/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-07 10:41:13
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-10 09:25:59
 */
import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList";

import { Provider } from "react-redux";
import store from "./store/index";

const App = (
  <Provider store={store}>
    <TodoList></TodoList>
  </Provider>
);

ReactDOM.render(App, document.getElementById("root"));
