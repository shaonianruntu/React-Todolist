/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-07 10:42:26
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-08 13:37:27
 */
import React, { Component, Fragment } from "react";

import TodoItem from "./TodoItem";

import "./style.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    this.getTodoItem = this.getTodoItem.bind(this);
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">Input Content: </label>
          <input
            id="insertArea"
            className="input"
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>Submit</button>
        </div>
        <ul>{this.getTodoItem()}</ul>
      </Fragment>
    );
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
    const value = e.target.value;
    // 当把 setSate 对象变成函数的时候，函数是异步的，需要先定义一个变量来传递。
    this.setState(() => ({
      inputValue: value
    }));
    // this.setState({
    //   inputValue: e.target.value
    // });
  }

  handleBtnClick() {
    // prevState == this.state
    this.setState(prevState => ({
      inputValue: "",
      list: [...prevState.list, prevState.inputValue]
    }));

    // this.setState({
    //   inputValue: "",
    //   list: [...this.state.list, this.state.inputValue]
    // });
  }

  handleItemDelete(index) {
    this.setState(prevState => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return { list: list };
    });

    // const list = [...this.state.list];
    // list.splice(index, 1);
    // this.setState(() => ({
    //   list: list
    // }));
    // this.setState({
    //   list: list
    // });
  }
}

export default TodoList;
