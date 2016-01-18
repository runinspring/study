//import thunkMiddleware from 'redux-thunk'
//import createLogger from 'redux-logger'

var thunkMiddleware = require("redux-thunk");
var createLogger = require("redux-logger");

import { createStore, applyMiddleware } from 'redux'
import { selectReddit, fetchPosts } from './actions'
import rootReducer from './reducers/Reducers'
let loggerMiddleware = createLogger()
let createStoreWithMiddleware = applyMiddleware(
//    thunkMiddleware, // 允许我们 dispatch() 函数
    loggerMiddleware
)(createStore)

let store = createStoreWithMiddleware(rootReducer);

store.dispatch(selectReddit('reactjs'))
store.dispatch(fetchPosts('reactjs')).then(() =>
    console.log(store.getState())
)