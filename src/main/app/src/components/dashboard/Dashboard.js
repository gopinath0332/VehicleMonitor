import React, {Component} from "react";
import {withRouter} from "react-router-dom";

import "./dashboard.less";
import MapContainer from "../maps/MapContainer";
import trackData from "./trackDetailsData";
import latLang from "./latLangData";
class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard col col-md-12" ref={c=>this.mapDom=c}>
                <MapContainer/>
            </div>
        )
    }
}

export default withRouter(Dashboard);