import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Dashboard from "../dashboard/Dashboard";
import PageNotFound from "../view/PageNotFound";
import SibeBar from "../view/sidebar/Sidebar";

const Main = () => (
  <div className="main-content">
    <SibeBar/>
    <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route path='/dashboard' component={Dashboard}/>
      <Route path='/!*' component={PageNotFound}/>
    </Switch>
  </div>
);

export default Main;
