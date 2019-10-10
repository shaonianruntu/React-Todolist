/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-10 08:49:12
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-10 10:02:32
 */
import React, { Component } from "react";
import { connect } from "react-redux";

// 无状态组件
const TodoList = props => {
  const {
    inputValue,
    list,
    handleInputChange,
    handleBtnClick,
    handleItemDelete
  } = props;

  return (
    <div>
      <div>
        <input value={inputValue} onChange={handleInputChange} />
        <button onClick={handleBtnClick}>Submit</button>
      </div>
      <ul>
        {list.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                handleItemDelete(index);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputChange(e) {
      const action = {
        type: "change_input_value",
        value: e.target.value
      };
      dispatch(action);
    },
    handleBtnClick() {
      const action = {
        type: "add_item"
      };
      dispatch(action);
    },
    handleItemDelete(index) {
      const action = {
        type: "delete_item",
        index: index
      };
      console.log(index);
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
