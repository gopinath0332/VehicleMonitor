import React, {Component} from "react";
import {render} from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from "./components/login/Login";
import App from "./app/app";
render((
    <Router>
        <App/>
    </Router>
), document.getElementById('content'));
