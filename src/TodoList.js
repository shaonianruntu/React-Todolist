/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-07 10:42:26
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-07 10:50:45
 */
import React, { Component } from "react";

class TodoList extends Component {
  render() {
    return (
      <div>
        <div>
          <input type="text" />
          <button>Submit</button>
        </div>
        <ul>
          <li>学习英语</li>
          <li>Learn React</li>
        </ul>
      </div>
    );
  }
}

export default TodoList;
