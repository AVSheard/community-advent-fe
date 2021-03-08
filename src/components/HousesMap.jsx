import React, { Component } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

class HousesMap extends Component {
	state = {
		activeHouse: null,
		houses: [
			{
				house_id: 1,
				houseName: "'Prospecton, Tunstead Lane'",
				day: 1,
				houseLongLoc: 53.5386,
				houseLatLoc: -1.99691,
				calendar_id: 1,
				housePicture: null,
			},
			{
				house_id: 2,
				houseName: "'Prospecton Farm, Tunstead Lane'",
				day: 24,
				houseLongLoc: 53.5383,
				houseLatLoc: -1.99775,
				calendar_id: 1,
				housePicture: null,
			},
		],
	};

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

					{this.state.houses.map((house) => (
						<Marker
							key={house.house_id}
							position={[house.houseLongLoc, house.houseLatLoc]}
							eventHandlers={{
								click: () => {
									this.setState({ activeHouse: [house] });
								},
							}}
						/>
					))}

					{this.state.activeHouse && (
						<Popup
							position={[
								this.state.activeHouse[0].houseLongLoc,
								this.state.activeHouse[0].houseLatLoc,
							]}
							onClose={() => this.setState({ activeHouse: null })}>
							<div>
								<h2>{this.state.activeHouse[0].day}</h2>
							</div>
						</Popup>
					)}
				</MapContainer>
			</div>
		);
	}
}

export default HousesMap;
