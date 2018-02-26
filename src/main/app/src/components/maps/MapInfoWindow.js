import React, { Component } from "react";
import { autobind } from 'core-decorators';
import ReactDOMServer from 'react-dom/server'

@autobind
export default class MapInfoWindow extends Component {

  updateContent() {
    const content = this.renderChildren();
    this.infowindow.setContent(content);
  }

  updatePosition() {
    let pos = this.props.position;
    if (!(pos instanceof google.maps.LatLng)) {
      pos = pos && new google.maps.LatLng(pos.lat, pos.lng);
    }
    this.infowindow.setPosition(pos);
  }

  renderInfoWindow() {
    let { google, onClose } = this.props;
    const iw = this.infowindow = new google.maps.InfoWindow({
      content: ''
    });
    if (onClose) {
      google.maps.event.addListener(iw, 'closeclick', () => onClose());
    }
  }

  renderChildren() {
    const { children } = this.props;
    return ReactDOMServer.renderToString(children);
  }

  openWindow() {
    this.infowindow.open(this.props.map, this.props.marker);
  }

  closeWindow() {
    this.infowindow.close();
  }

  componentDidMount() {
    this.renderInfoWindow();
  }

  componentDidUpdate(prevProps, prevState) {
    const { google, map } = this.props;

    if (!google || !map) {
      return;
    }
    if (this.props.map !== prevProps.map) {
      this.renderInfoWindow();
    }
    if (this.props.position !== prevProps.position) {
      this.updatePosition();
    }
    if (this.props.children !== prevProps.children) {
      this.updateContent();
    }
    if ((this.props.visible !== prevProps.visible) || (this.props.marker !== prevProps.marker)) {
      this.props.visible ? this.openWindow() : this.closeWindow();
    }
  }


  render() {
    return null;
  }
}
