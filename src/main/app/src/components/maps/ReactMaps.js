import React, {Component} from "react";
import {autobind} from 'core-decorators';

@autobind
export default class Maps extends Component {
    map = null;
    config = {
        center: {
            lat: 13.0347043,
            lng: 80.208199
        },
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.VERTICAL_BAR,
            position: google.maps.ControlPosition.TOP_RIGHT
        },
    };

    constructor(args) {
        super(args);
        this.state = {
            currentLocation: {
                ...this.config.center
            },
            isMapLoaded: false
        };
    }

    loadMap() {
        try {
            const {maps} = google;
            //default map config
            const mapConfig = {
                ...this.config,
                ...this.props.mapConfig
            };
            this.map = new maps.Map(this.node, mapConfig);
            // maps.event.trigger(this.map, 'ready');
            maps.event.addListenerOnce(this.map, 'idle', () => {
                this.setState({
                    isMapLoaded: true
                });
            })
        } catch (e) {
            console.error("error in loading map ", e);
        }
    }

    renderChildren() {
        const {children} = this.props;
        if (!children)
            return;
        return React.Children.map(children, c => {
            return React.cloneElement(c, {
                map: this.map,
                google: google,
                mapCenter: this.state.currentLocation
            })
        })
    }

    componentDidMount() {
        this.loadMap();
    }

    componentDidUpdate(prevProps, prevState) {
        // this.loadMap();
    }

    render() {
        return (
            <div className="map-node" ref={c => this.node = c}>
                Loading map...
                {this.state.isMapLoaded && this.renderChildren()}
            </div>
        )
    }
}
