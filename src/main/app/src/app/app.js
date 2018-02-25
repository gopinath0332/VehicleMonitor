import React, {Component,Fragment} from "react";

import Header from "../components/view/header/Header";
import Main from "../components/view/Main";
import "./app.less";

const App = () => (
    <Fragment>
        <Header/>
        <Main/>
    </Fragment>
);

export default App;
