/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-08 13:10:04
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-08 13:20:49
 */
import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  render() {
    const { content } = this.props;
    return <div onClick={this.handleItemDelete}>{content}</div>;
  }

  handleItemDelete() {
    const { handleItemDelete, index } = this.props;
    handleItemDelete(index);
  }
}

export default TodoItem;
