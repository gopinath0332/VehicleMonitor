import React from "react";

import Header from "../components/view/header/Header";
import Main from "../components/view/Main";
import style from "./app.less";

const App = () => (
  <div className={style.app}>
    <Header/>
    <Main/>
  </div>
);

export default App;
