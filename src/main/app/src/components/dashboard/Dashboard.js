import React, {Component} from "react";
import ReactDOMServer from "react-dom/server";
import {withRouter} from "react-router-dom";

import "./dashboard.less";

import Maps from "../maps/Maps";
class Dashboard extends Component {
    componentDidMount(){
        const maps = new Maps(this.mapDom);
        console.log("Maps::",maps);
        maps.createMap();
    }
    render() {
        return (
            <div className="dashboard col col-md-12" ref={c=>this.mapDom=c}>
            </div>
        )
    }
}

export default withRouter(Dashboard);