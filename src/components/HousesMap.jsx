import axios from "axios";
import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

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

	retrieveHouses = (id) => {
		axios
			.get(
				`https://community-advent2.herokuapp.com/api/houses/?calendar_id=${id}`
			)
			.then((res) => {
				this.setState({ houses: res.data.houses });
			});
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
							<h2>{`Day ${this.state.activeHouse[0].day}, ${this.state.activeHouse[0].houseName}`}</h2>
						</Popup>
					)}
				</MapContainer>
			</div>
		);
	}
}

export default HousesMap;
