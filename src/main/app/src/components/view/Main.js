import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from "../login/Login";
import Dashboard from "../dashboard/Dashboard";

const Main1 = () => (
    <main>
        <Switch>
            <Route  path='/' component={Login}/>
            <Route path='/dashboard' component={Dashboard}/>
        </Switch>
    </main>
);

export default Main1;