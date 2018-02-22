import React, {Component} from "react";
import {withRouter, Link} from "react-router-dom";
import {autobind} from 'core-decorators';

@autobind
class Login extends Component {
    login() {
        this.props.history.push("/dashboard");
    }

    render() {
        return (
            <div>
                <h1>Welcome to the Tornadoes Website!1</h1>
                <button onClick={this.login}>CLick me </button>
            </div>
        )
    }
}

export default withRouter(Login);
