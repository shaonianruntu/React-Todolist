/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-07 10:42:26
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-09 15:15:44
 */
import React, { Component } from "react";
import TodoListUI from "./TodoListUI";

import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  getTodoList
} from "./store/actionCreators";

import "antd/dist/antd.css";
import "./style.css";

import store from "./store/index";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);

    // 把作用域绑定放在首部，只绑定一次，可以提升性能
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
      ></TodoListUI>
    );
  }

  // 只执行一次
  componentDidMount() {
    // 新版本 Charles Local Map 404 的解决方法：https://segmentfault.com/a/1190000018765258?utm_source=tag-newest
    // 在浏览器中访问 React 项目时，也需要使用 http://http://localhost.charlesproxy.com:3000 的域名来访问才能实现。
    const action = getTodoList();
    store.dispatch(action); // 如果 action 是一个函数，那么 store.dispatch 就是直接执行这个函数
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleBtnClick() {
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handleItemDelete(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }
}

export default TodoList;
