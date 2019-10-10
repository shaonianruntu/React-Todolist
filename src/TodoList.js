/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-10 08:49:12
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-10 09:26:27
 */
import React, { Component } from "react";
import { connect } from "react-redux";

class TodoList extends Component {
  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.props.inputValue}
            onChange={this.props.handleInputChange}
          />
          <button>Submit</button>
        </div>
        <ul>
          <li>Dell</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
