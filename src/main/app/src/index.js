import React, {Component} from "react";
import ReactDOM from "react-dom";
import css from "./index.less";


class App extends Component {
    render() {
        return (
            <div id="app" className={css.test}>
                <div> App component - 12
                    <img className="col col-md-8" src="./resources/images/download.png"/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("content"));