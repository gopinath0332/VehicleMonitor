import React, {Component} from "react";
import {autobind} from 'core-decorators';

@autobind
export default class Maps extends Component {
    map = null;

    constructor(args) {
        super(args);
        this.state = {};
    }

    loadMap() {
        try {
            const {maps} = google;
            const mapConfig = {
                center: {
                    lat: 13.0347043,
                    lng: 80.208199
                },
                zoom: 7,
                mapTypeId: maps.MapTypeId.ROADMAP,
                mapTypeControl: true,
                mapTypeControlOptions: {
                    style: maps.MapTypeControlStyle.VERTICAL_BAR,
                    position: maps.ControlPosition.TOP_RIGHT
                }
            };
            this.map = new maps.Map(this.node, mapConfig);
        } catch (e) {
            console.error("error in loading map ", e);
        }
    }

    componentDidMount() {
        this.loadMap();
    }

    render() {
        return (
            <div className="map-node" ref={c => this.node = c}>
                Loading map...
            </div>
        )
    }
}
