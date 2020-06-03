import React,{ Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Route,Switch,BrowserRouter} from "react-router-dom";

import Gw from './view/guanwang/loadable'
import Login from './view/login/loadable'
import RedirectAs404 from './view/404/loadable'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <Switch>
          {/* 官网 */}
          <Route path='/' exact component={Gw}/>
          {/* 正常页 */}
          <Route path='/main' component={App}/>
          {/* 404 */}
          <Route component={RedirectAs404}/>
        </Switch>
      </Fragment>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
