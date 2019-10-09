/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-09 13:57:57
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-09 14:28:27
 */
import React from "react";
import { Input, Button, List } from "antd";

// 只有 render 的组件是无状态组件
// 使用无状态组件可以进一步提高性能
const TodoListUI = props => {
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
          value={props.inputValue}
          placeholder="todo info"
          style={{ width: "300px", marginRight: "10px" }}
          onChange={props.handleInputChange}
        ></Input>
        <Button type="primary" onClick={props.handleBtnClick}>
          Submit
        </Button>
      </div>
      <List
        style={{ marginTop: "10px", width: "393px" }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item
            onClick={index => {
              props.handleItemDelete(index);
            }}
          >
            {item}
          </List.Item>
        )}
      />
      {/* <ul>{this.getTodoItem()}</ul> */}
    </div>
  );
};

export default TodoListUI;
