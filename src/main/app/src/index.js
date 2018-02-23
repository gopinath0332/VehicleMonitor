import React, {Component} from "react";
import {render} from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from "./app/app";
const appName = window.location.pathname.substr(0, window.location.pathname.lastIndexOf('/'));
render((
    <Router basename={appName}>
        <App/>
    </Router>
), document.getElementById('content'));
