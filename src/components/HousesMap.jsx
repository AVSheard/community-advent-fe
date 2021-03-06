import React, { Component } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

class HousesMap extends Component {
	render() {
		return (
			<div className="mapContainer">
				<MapContainer
					center={{
						lat: 53.5382321,
						lng: -1.9920182,
					}}
					zoom={15}>
					<TileLayer
						attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
				</MapContainer>
			</div>
		);
	}
}

export default HousesMap;
