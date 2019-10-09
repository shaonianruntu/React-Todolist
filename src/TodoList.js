/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-07 10:42:26
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-09 13:38:44
 */
import React, { Component, Fragment } from "react";
import { Input, Button, List } from "antd";
import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM
} from "./store/actionTypes";

import axios from "axios";
import TodoItem from "./TodoItem";

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
    this.getTodoItem = this.getTodoItem.bind(this);
  }

  render() {
    return (
      <div style={{ marginTop: "10px", marginLeft: "10px" }}>
        <div>
          <label htmlFor="insertArea">Input Content: </label>
          {/* <input
            id="insertArea"
            className="input"
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          /> */}

          {/* <button onClick={this.handleBtnClick}>Submit</button> */}
          <Input
            value={this.state.inputValue}
            placeholder="todo info"
            style={{ width: "300px", marginRight: "10px" }}
            onChange={this.handleInputChange}
          ></Input>
          <Button type="primary" onClick={this.handleBtnClick}>
            Submit
          </Button>
        </div>
        <List
          style={{ marginTop: "10px", width: "393px" }}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.handleItemDelete.bind(this, index)}>
              {item}
            </List.Item>
          )}
        />
        {/* <ul>{this.getTodoItem()}</ul> */}
      </div>
    );
  }

  // 只执行一次
  componentDidMount() {
    // 新版本 Charles Local Map 404 的解决方法：https://segmentfault.com/a/1190000018765258?utm_source=tag-newest
    // 在浏览器中访问 React 项目时，也需要使用 http://http://localhost.charlesproxy.com:3000 的域名来访问才能实现。
    // axios
    //   .get("api/todolist")
    //   .then(res => {
    //     console.log(res.data);
    //     this.setState(() => ({
    //       list: [...res.data]
    //     }));
    //   })
    //   .catch(() => {
    //     alert("error");
    //   });
  }

  getTodoItem() {
    // 记得加 return
    return this.state.list.map((item, index) => {
      // 由于 React 的虚拟 DOM 的 diff 算法，将 key 设置为 item 会较 index 更高效很多。
      // dangerouslySetInnerHTML 保留输入文本的 HTML 样式。
      return (
        <TodoItem
          key={item}
          content={item}
          index={index}
          handleItemDelete={this.handleItemDelete}
        ></TodoItem>
        // <li
        //   key={item}
        //   onClick={this.handleItemDelete.bind(this, index)}
        //   dangerouslySetInnerHTML={{ __html: item }}
        // >
        //   {/* {item} */}
        // </li>
      );
    });
  }

  handleInputChange(e) {
    const action = {
      type: CHANGE_INPUT_VALUE,
      value: e.target.value
    };

    store.dispatch(action);

    // const value = e.target.value;
    // 当把 setSate 对象变成函数的时候，函数是异步的，需要先定义一个变量来传递。
    // setState 使用异步函数，可以提高性能
    // this.setState(() => ({
    //   inputValue: value
    // }));
  }

  handleBtnClick() {
    const action = {
      type: ADD_TODO_ITEM
    };
    store.dispatch(action);

    // prevState == this.state
    // this.setState(prevState => ({
    //   inputValue: "",
    //   list: [...prevState.list, prevState.inputValue]
    // }));
  }

  handleItemDelete(index) {
    const action = {
      type: DELETE_TODO_ITEM,
      index: index
    };
    store.dispatch(action);

    // this.setState(prevState => {
    //   const list = [...prevState.list];
    //   list.splice(index, 1);
    //   return { list: list };
    // });
  }

  handleStoreChange() {
    this.setState(store.getState());
  }
}

export default TodoList;
