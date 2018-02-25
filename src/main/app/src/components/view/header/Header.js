import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {autobind} from 'core-decorators';
import util from "../../../util/appUtil";
import "./header.less";

@autobind
class Header extends Component {
    onHome() {
        this.props.history.push("/");
    }

    render() {
        return (
            <section className="app-header">
                <div className="container-fluid">
                    <div className="col col-md-1">
                        <i className="fa fa-home app-home" onClick={this.onHome}/>
                    </div>
                    <div className="col col-md-9">
                        <div className="app-name">Vehicle Monitoring System</div>
                    </div>
                    <div className="col col-md 2 app-info">
                        <label className="app-user-name"> {util.getUsername()}</label>
                        <i className="fa fa-cog settings"/>
                    </div>
                </div>
            </section>
        );
    }
}

export default withRouter(Header);