import React, {
  Component
} from "react";
import {
  autobind
} from 'core-decorators';

/**
 *  Class to create google maps marker
 */

@autobind
export default class Marker extends Component {
  marker = null;

  renderMarker(props = this.props) {
    let {
      map,
      google,
      position,
      title = "",
      onClick
    } = props;
    if (!google)
      return;
    const config = {
      map: map,
      position: position,
      title
    };
    this.marker = new google.maps.Marker(config);
    if (onClick) {
      this.marker.addListener("click", (e) => {
        onClick(this.props, this.marker, e);
      })
    }
  }

  componentDidMount() {
    this.renderMarker();
  }


  componentDidUpdate(prevProps) {
    if (this.props.position.lat !== prevProps.position.lat || this.props.position.lng !== prevProps.position.lng) {
      if (this.marker) {
        this.marker.setMap(null);
      }
      this.renderMarker();
    }

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

