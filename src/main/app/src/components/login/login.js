import React, {Component} from "react";
import {withRouter,Link} from "react-router-dom";
import {autobind} from 'core-decorators';

@autobind
class Login extends Component {
    login(){
        this.props.history.push("/dashboard");
    }
    render() {
        return (
            <div className="login">
                Login screen.

                <button onClick={this.login}>dashboard click</button>
            </div>
        )
    }
}

export default withRouter(Login);