/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-09 15:59:39
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-09 16:19:40
 */
import { put, takeEvery } from "redux-saga/effects";
import { GET_INIT_LIST } from "./actionTypes";

import { initListAction } from "./actionCreators";

import axios from "axios";

function* getInitList(action) {
  try {
    const res = yield axios.get("./list.json");
    action = initListAction(res.data);
    yield put(action);
  } catch {
    console.log("list.json ajax 获取失败");
  }

  //   axios
  //     .get("list.json")
  //     .then(res => {
  //       const data = res.data;
  //       const action = initListAction(data);
  //       console.log(action);
  //       put(action);
  //       //   store.dispatch(action); // 此时 action 是一个对象，就会作用到 store 上
  //     })
  //     .catch(() => {
  //       alert("error");
  //     });
}

function* TodoSagas() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default TodoSagas;
