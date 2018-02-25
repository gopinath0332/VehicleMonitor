import React, {Component} from "react";
import {render} from "react-dom";
import {autobind} from 'core-decorators';
import axios from "axios";

import "./login.less";

@autobind
class Login extends Component {
    constructor(args) {
        super(args);
        this.state = {
            name: "",
            password: ""
        };
    }

    /**
     * Method to login authentication rest call
     */
    login() {
        const {name, password} = this.state;
        axios.post("/api/login", {
            name,
            password
        }).then(({data}) => {
            if (data === "success") {
                window.location.reload();
            }
        });
    }

    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="form-signin">
                        <h2 className="form-signin-heading">Vehicle Monitoring System</h2>
                        <input type="text" className="form-control"
                               name="username"
                               placeholder="Username"
                               onChange={(evt)=>this.setState({name: evt.target.value})}
                               required
                               autoFocus/>
                        <input type="password" className="form-control"
                               name="password"
                               placeholder="Password"
                               onChange={(evt)=>this.setState({password: evt.target.value})}
                               required=""/>
                        <button className="btn btn-lg btn-primary btn-block" onClick={this.login}>Login</button>
                    </div>
                </div>
            </div>
        )
    }
}

render((<Login/>), document.getElementById("login"));