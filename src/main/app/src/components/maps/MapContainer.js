import React, {Component} from "react";
import ReactMap from "./ReactMaps";
import Marker from "./Marker";

import "./maps.less";

export default class MapContainer extends Component {
    constructor(args) {
        super(args);
        this.state = {
            position: {
                lat: 0,
                lng: 0
            }
        }
    }

    componentDidMount() {
        this.setState({
            position: {
                lat: 13.078791,
                lng: 80.252266
            }
        })
    }

    render() {
        const position = {
            ...this.state.position
        };
        return (
            <div className="map-container">
                <ReactMap {...this.props}>
                    <Marker position={position}/>
                </ReactMap>
            </div>
        )
    }
}