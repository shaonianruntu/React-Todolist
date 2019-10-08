/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-07 10:42:26
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-08 13:06:55
 */
import React, { Component } from "react";
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
  }

  render() {
    return (
      <div>
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
        <ul>
          {this.state.list.map((item, index) => {
            // 由于 React 的虚拟 DOM 的 diff 算法，将 key 设置为 item 会较 index 更高效很多。
            // dangerouslySetInnerHTML 保留输入文本的 HTML 样式。
            return (
              <li
                key={item}
                onClick={this.handleItemDelete.bind(this, index)}
                dangerouslySetInnerHTML={{ __html: item }}
              >
                {/* {item} */}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  handleBtnClick() {
    this.setState({
      inputValue: "",
      list: [...this.state.list, this.state.inputValue]
    });
  }

  handleItemDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    });
  }
}

export default TodoList;
