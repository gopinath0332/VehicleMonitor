import React, {Component} from "react";
import {render} from "react-dom";
import Header from "../view/Header";

const App = () => (
    <div>
        <Header/>
        <div>Login screen</div>
    </div>
);

render((<App/>),document.getElementById("login"));