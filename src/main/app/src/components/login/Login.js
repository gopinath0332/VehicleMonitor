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
                <h1>Welcome to the Tornadoes Website!</h1>
                <button className="btn btn-primary" onClick={this.login}>Redirect to dashboard</button>
            </div>
        )
    }
}

export default withRouter(Login);
// export default Login;
