import React, { Component } from "react";
import ReactMap from "./ReactMaps";
import { autobind } from 'core-decorators';

import MapMarker from "./MapMarker";
import MapInfoWindow from "./MapInfoWindow"
import "./maps.less";

@autobind
export default class MapContainer extends Component {
  constructor(args) {
    super(args);
    this.state = {
      position: {
        lat: 0,
        lng: 0
      },
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      makerDetails: []
    }
  }

  /**
   * marker click handler
   * @param props
   * @param marker
   * @param e
   */
  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onInfoClose() {
    this.setState({
      selectedPlace: {},
      activeMarker: {},
      showingInfoWindow: false
    })
  }

  componentDidMount() {
    this.setState({
      position: {
        lat: 13.078791,
        lng: 80.252266
      }
    })
  }

  componentDidUpdate(prevProps) {
    //TODO: need to check array elements difference.
    if (prevProps.makerDetails.length !== this.props.makerDetails.length) {
      this.setState({
        makerDetails: this.props.makerDetails
      })
    }
  }

  render() {
    const position = {
      ...this.state.position
    };
    return (
      <div className="map-container">
        <ReactMap {...this.props}>
          {
            this.state.makerDetails.map(item => {
              const position = {
                lat: parseFloat(item.lat),
                lng: parseFloat(item.lng)
              };
              return <MapMarker position={position}
                key={item.deviceId}
                title={item.vehicleNumber}
                onClick={this.onMarkerClick} />
            })
          }
          <MapInfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoClose}>
            <div>
              <h5>{this.state.selectedPlace.title}</h5>
            </div>
          </MapInfoWindow>
        </ReactMap>
      </div>
    )
  }
}

MapContainer.defaultProps = {
  makerDetails: []
};
