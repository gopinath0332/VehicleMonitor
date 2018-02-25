import React, {Component} from "react";
import {autobind} from 'core-decorators';

/**
 *  Class to create google maps marker
 */
const wrappedPromise = function() {
    let wrappedPromise = {},
        promise = new Promise(function (resolve, reject) {
            wrappedPromise.resolve = resolve;
            wrappedPromise.reject = reject;
        });
    wrappedPromise.then = promise.then.bind(promise);
    wrappedPromise.catch = promise.catch.bind(promise);
    wrappedPromise.promise = promise;

    return wrappedPromise;
};

@autobind
export default class Marker extends Component {
    marker = null;

    renderMarker(props = this.props) {
        let {map, google, position} = props;
        if (!google)
            return;
        // position = new google.maps.LatLng(position.lat, position.lng);
        const config = {
            map: map,
            position: position
        };
        this.marker = new google.maps.Marker(config);
        // this.markerPromise.resolve(this.marker);
    }

    componentDidMount() {
        // this.markerPromise = wrappedPromise();
        this.renderMarker();
    }


    componentDidUpdate(prevProps) {
        if (this.marker) {
            this.marker.setMap(null);
        }
        this.renderMarker();
    }

    componentWillUnmount() {
        if (this.marker) {
            this.marker.setMap(null);
        }
    }

    render() {
        return null;
    }
}