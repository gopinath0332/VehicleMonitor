import React, {Component} from "react";
import {render} from "react-dom";
import {autobind} from 'core-decorators';
import axios from "axios";
import {TextField} from "material-ui";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppUtil from "../../util/appUtil";
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
    // this.props.history.push("/dashboard");
    const {name, password} = this.state;
    axios.post("/api/login", {
      name,
      password
    }).then(({data}) => {
      if (data === "success") {
        AppUtil.setUsername(name);
        window.location.reload();
      }
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="wrapper">
          <div className="form-signin">
            <h4 className="form-signin-heading">Vehicle Monitoring System</h4>
            <input type="text" className="form-control"
                   name="username"
                   placeholder="Username"
                   onChange={(evt) => this.setState({name: evt.target.value})}
                   required
                   autoFocus/>
            <TextField
              floatingLabelText="Username"
            />
            <input type="password" className="form-control"
                   name="password"
                   placeholder="Password"
                   onChange={(evt) => this.setState({password: evt.target.value})}
                   required=""/>
            <button className="btn btn-lg btn-primary btn-block" onClick={this.login}>Login</button>
            <button className="btn btn-link">Reset Password</button>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

render((<Login/>), document.getElementById("login"));
