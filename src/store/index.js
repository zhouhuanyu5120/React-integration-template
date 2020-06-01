import {createStore,compose,applyMiddleware} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
import {routerMiddleware} from 'react-router-redux';

let createHistory = require('history').createHashHistory;
// let history = createHistory();   // 初始化history
// let routerWare = routerMiddleware(history);

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;


const store = createStore(reducer,composeEnhancers(
    applyMiddleware(thunk)
))

export default store