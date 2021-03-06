import React, { Component } from "react";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

class HousesMap extends Component {
	render() {
		return <div className="mapContainer"></div>;
	}
}

export default HousesMap;
