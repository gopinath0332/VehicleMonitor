import React,{Component} from "react";
import ReactMap from "./ReactMaps";

import "./maps.less";
export default class MapContainer extends Component{
    render(){
        const style = {
            width: '100%',
            height: '100%',
            display: "flex",
            flexDirection: "row",
            flexGrow: 1
        };
        return(
            <div className="map-container">
                <ReactMap/>
            </div>
        )
    }
}