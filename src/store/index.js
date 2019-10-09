/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-08 17:25:39
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-09 14:58:56
 */
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducer, enhancer);

export default store;
