import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import houses from "../data/UppermillTwo";

class HousesMap extends Component {
	state = {
		activeHouse: null,
		houses: houses,
		userLoc: null,
		userLoaded: false,
	};

	componentDidMount = () => {
		const success = (pos) => {
			this.setState({
				userLoc: [pos.coords.latitude, pos.coords.longitude],
				userLoaded: true,
			});
		};

		navigator.geolocation.getCurrentPosition(success);
	};

	render() {
		return (
			<div className="mapContainer">
				<MapContainer
					center={{
						lat: 53.5488627,
						lng: -2.0042356,
					}}
					zoom={15}>
					<TileLayer
						attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>

					{this.state.userLoaded && (
						<Marker
							position={[this.state.userLoc[0], this.state.userLoc[1]]}
							icon={
								new Icon({
									iconUrl: `/avatar.png`,
									iconSize: [35, 35],
								})
							}></Marker>
					)}

					{this.state.houses.map((house) => {
						return (
							(new Date().getDate() >= house.day || new Date().getMonth() === 0) && (
								<Marker
									key={house.house_id}
									position={[house.houseLongLoc, house.houseLatLoc]}
									eventHandlers={{
										click: () => {
											this.setState({ activeHouse: [house] });
										},
									}}
									icon={
										new Icon({
											iconUrl: `/numbers/num${house.day}.png`,
											iconSize: [25, 25],
										})
									}
								/>
							)
						);
					})}

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
