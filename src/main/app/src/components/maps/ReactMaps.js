import React,{Component} from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"

class Maps extends  Component{
    constructor(args){
        super(args);
    }
    render(){
        return(
            <div className="map">
                <GoogleMap {...this.props}>
                    <Marker position={{ lat: -34.397, lng: 150.644 }} />
                </GoogleMap>
            </div>
        )
    }
}

Maps.defaultProps  ={
    defaultCenter : {
        lat : 13.0347043,
        lng : 80.208199
    },
    defaultZoom : 7,
    mapTypeId : google.maps.MapTypeId.ROADMAP,
    mapTypeControl: true,
    mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.VERTICAL_BAR,
        position: google.maps.ControlPosition.TOP_RIGHT
    }
};

export default withGoogleMap(Maps);