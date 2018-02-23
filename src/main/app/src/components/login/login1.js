import React, {Component} from "react";
import {render} from "react-dom";
import {autobind} from 'core-decorators';
import axios from "axios";

const App = () => (
    <div>
        <div>Login screen</div>
    </div>
);

@autobind
class Login extends Component {
    constructor(args) {
        super(args);
        this.state = {
            name: "",
            password: ""
        };
    }

    onUserName(evt) {
        this.setState({
            name: evt.target.value
        });
    }

    onPassword(evt) {
        this.setState({
            password: evt.target.value
        });
    }
    login(){
        const {name,password} = this.state;
            axios.post("/api/login",{
                name,
                password
            }).then(({data})=>{
                console.log("response::",data);
                if(data === "success"){
                    window.location.reload();
                }
            });
    }

    render() {
        return (
            <div>
                <div> Login Screen</div>
                <label> Username</label>
                <input type="text" onChange={this.onUserName}/>
                <label> Password</label>
                <input type="text" onChange={this.onPassword}/>
                <button onClick={this.login}> Login </button>
            </div>
        )
    }
}

render((<Login/>), document.getElementById("login"));