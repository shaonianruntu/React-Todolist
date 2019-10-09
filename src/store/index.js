/*
 * @Description:
 * @Author: fangn
 * @Github:
 * @Date: 2019-10-08 17:25:39
 * @LastEditors: fangn
 * @LastEditTime: 2019-10-09 16:01:03
 */
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducer";
import TodoSagas from "./sagas";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

// mount it on the Store
const store = createStore(reducer, enhancer);

// then run the saga
sagaMiddleware.run(TodoSagas);

export default store;
