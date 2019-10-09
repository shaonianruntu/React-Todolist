/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-09 13:57:57
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-09 14:15:02
 */
import React, { Component } from "react";
import { Input, Button, List } from "antd";

class TodoListUI extends Component {
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
            value={this.props.inputValue}
            placeholder="todo info"
            style={{ width: "300px", marginRight: "10px" }}
            onChange={this.props.handleInputChange}
          ></Input>
          <Button type="primary" onClick={this.props.handleBtnClick}>
            Submit
          </Button>
        </div>
        <List
          style={{ marginTop: "10px", width: "393px" }}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item
              onClick={index => {
                this.props.handleItemDelete(index);
              }}
            >
              {item}
            </List.Item>
          )}
        />
        {/* <ul>{this.getTodoItem()}</ul> */}
      </div>
    );
  }
}

export default TodoListUI;
