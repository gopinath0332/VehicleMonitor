import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import Dashboard from "../dashboard/Dashboard";
import PageNotFound from "../view/PageNotFound";
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/*' component={PageNotFound}/>
        </Switch>
    </main>
);

export default Main;