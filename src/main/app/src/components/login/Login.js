import React, {Component} from "react";
import {render} from "react-dom";
import {autobind} from 'core-decorators';
import axios from "axios";
import {TextField} from "material-ui";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {validationError} from "../../util/messages";
import AppUtil from "../../util/appUtil";
import "./login.less";

@autobind
class Login extends Component {
  constructor(args) {
    super(args);
    this.state = {
      name: "",
      password: "",
      nameValidation: "",
      passwordValidation: ""
    };
  }

  /**
   * Method to login authentication rest call
   */
  login() {
    // this.props.history.push("/dashboard");
    const {name, password} = this.state;
    !name && this.setState({nameValidation: validationError});
    !password && this.setState({passwordValidation: validationError});
    if (name && password) {
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
  }

  setUsername(evt, name) {
    this.setState({
      name,
      nameValidation: name ? "" : validationError
    });
  }

  setPassword(evt, password) {
    this.setState({
      password,
      passwordValidation: password ? "" : validationError
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="wrapper">
          <div className="form-signin">
            <h4 className="form-signin-heading">Vehicle Monitoring System</h4>
            <TextField
              floatingLabelText="Username"
              fullWidth
              onChange={this.setUsername}
              errorText={this.state.nameValidation}
            />
            <TextField
              floatingLabelText="Password"
              fullWidth
              onChange={this.setPassword}
              type="password"
              errorText={this.state.passwordValidation}
            />
            <button className="btn btn-lg btn-primary btn-block" onClick={this.login}>Login</button>
            <button className="btn btn-link">Reset Password</button>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

render((<Login/>), document.getElementById("login"));
