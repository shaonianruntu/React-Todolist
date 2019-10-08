/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-08 17:25:39
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-08 17:29:25
 */
import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

export default store;
