import React, {Component} from "react";
import {withRouter} from "react-router-dom";

import "./dashboard.less";
import MapContainer from "../maps/MapContainer";
import {vehicleOff, vehicleOn, vehicleIdle, vehicleRunning} from "../../util/constants";
import currentDevices from "./trackDetailsData";
import allDevices from "./latLangData";

/**
 * Dashboard component
 */
class Dashboard extends Component {
  constructor(args) {
    super(args);
    this.state = {
      currentDevices: currentDevices,
      allDevices: allDevices,
      makerDetails: []
    };
  }

  /**
   * method to parse marker info.
   * @returns {any[]}
   */
  getDevcieDetails() {
    let data = [];
    try {
      data = this.state.allDevices.map(device => {
        let [deviceId, lat, lng, vehicleRunning, timeString, accStatus] = device;
        const date = new Date(timeString).toLocaleDateString();
        const time = new Date(timeString).toLocaleTimeString();
        const currentDevice = this.state.currentDevices[deviceId];
        if (currentDevice) {
          let [id, vehicleId, vehicleNumber, employeeName, UUId, subGroupName, groupName] = currentDevice;
          accStatus = accStatus.trim();
          if (accStatus === "00") {
            accStatus = vehicleOff;
          } else if (accStatus === "01") {
            accStatus = vehicleOn;
          }
          const latLang = {
            lat: parseFloat(lat),
            lng: parseFloat(lng)
          };
          let engineStatus = vehicleOff;
          if (accStatus === vehicleOff) {
            engineStatus = vehicleOff;
          } else if (accStatus === vehicleOn && parseInt(vehicleRunning) === 0) {
            engineStatus = vehicleIdle;
            accStatus = "idle";
          } else if (accStatus === vehicleOn && parseInt(vehicleRunning) > 0) {
            accStatus = "Running";
            engineStatus = vehicleRunning;
          }
          let carIcon = "";
          if (accStatus === vehicleOff) {
            carIcon = "carStop.png";
          } else if (accStatus === "idle" && parseInt(vehicleRunning) === 0) {
            carIcon = "carIdle.png";
          } else if (accStatus === "Running" && parseInt(vehicleRunning) > 0) {
            carIcon = "carStart.png";
          }
          return {
            groupName,
            subGroupName,
            speed: vehicleRunning,
            lat,
            lng,
            lastTrackTime: `${date} ${time}`,
            vehicleNumber,
            engineStatus,
            deviceId,
            vehicleId,
            carIcon,
            employeeName
          };
        }
      }).filter(Boolean);
    } catch (e) {
      console.error("Error in parsing marker details: ", e);
    }
    return data;
  }

  componentDidMount() {
    this.setState({
      makerDetails: this.getDevcieDetails()
    })
  }

  render() {
    return (
      <div className="dashboard col col-md-12" ref={c => this.mapDom = c}>
        <MapContainer makerDetails={this.state.makerDetails}/>
      </div>
    )
  }
}

export default withRouter(Dashboard);
