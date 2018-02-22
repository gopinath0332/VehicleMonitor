import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {autobind} from 'core-decorators';

import Login from "../components/login/login";
import Dashboard from "../components/dashboard/dashboard";

@autobind
class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to="/">Home</Link>
                    <Route exact path="/" component={Login}/>
                    <Route path="/dashboard" component={Dashboard}/>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("content"));