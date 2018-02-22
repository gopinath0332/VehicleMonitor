import React, {Component} from "react";
import {withRouter} from "react-router-dom";

class Dashboard extends Component {
    render() {
        return (
            <div className="login">
                Dashboar screen - click
            </div>
        )
    }
}

export default withRouter(Dashboard);