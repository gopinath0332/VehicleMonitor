import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import Dashboard from "../dashboard/Dashboard";
import PageNotFound from "../view/PageNotFound";
const Main = () => (
    <div className="main-content">
        <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/*' component={PageNotFound}/>
        </Switch>
    </div>
);

export default Main;