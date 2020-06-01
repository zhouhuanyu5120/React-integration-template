import React,{Fragment} from 'react'; 

import Home from '../view/home/loadable';
import About from '../view/about/loadable';
import IframeView from '../view/iframe/loadable'
import RedirectAs404 from '../view/404/loadable'

import { BrowserRouter as Router, Route,Switch} from "react-router-dom";

function RouterPath(){
    return (
        <Switch>
            <Route path='/main/home' component={Home}/>
            <Route path="/main/about" component={About} />
            <Route path="/main/iframe" component={IframeView} />
            <Route component={RedirectAs404}/>
        </Switch>
    );
}

export default RouterPath;