/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-08 13:10:04
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-08 15:08:39
 */
import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  // 防止父组件数据在输入过程中，未被正式点击 Submit 进行提交的时候，子组件一直更新消耗资源
  shouldComponentUpdate(nextProps, nextState) {
    // 在输入过程中，未被正式提交的时候，父组件的 inputValue 一直在改变，但是 list 却没有改变。只有在正式提交之后，父组件的 list 才会被改变，而子组件的 content 与父组件的 list 相关联。
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { text, content } = this.props;
    return (
      <div onClick={this.handleItemDelete}>
        {text}-{content}
      </div>
    );
  }

  handleItemDelete() {
    const { handleItemDelete, index } = this.props;
    handleItemDelete(index);
  }
}

// 增加 PropTypes 约束
// https://reactjs.org/docs/typechecking-with-proptypes.html
TodoItem.propTypes = {
  text: PropTypes.string.isRequired, // 必须存在
  content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  handleItemDelete: PropTypes.func,
  index: PropTypes.number
};

// 增加 DefaultProps 默认值
TodoItem.defaultProps = {
  text: "hello"
};

export default TodoItem;
