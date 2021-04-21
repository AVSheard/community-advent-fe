import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import houses from "../data/Uppermill";

const numOne = new Icon({
	iconUrl: "/numbers/num1.png",
	iconSize: [25, 25],
});
let numIcons = [
	new Icon({
		iconUrl: "/numbers/num1.png",
		iconSize: [25, 25],
	}),
	new Icon({
		iconUrl: "/numbers/num1.png",
		iconSize: [25, 25],
	}),
	new Icon({
		iconUrl: "/numbers/num1.png",
		iconSize: [25, 25],
	}),
	new Icon({
		iconUrl: "/numbers/num1.png",
		iconSize: [25, 25],
	}),
	new Icon({
		iconUrl: "/numbers/num1.png",
		iconSize: [25, 25],
	}),
	new Icon({
		iconUrl: "/numbers/num1.png",
		iconSize: [25, 25],
	}),
	new Icon({
		iconUrl: "/numbers/num1.png",
		iconSize: [25, 25],
	}),
	new Icon({
		iconUrl: "/numbers/num1.png",
		iconSize: [25, 25],
	}),
	new Icon({
		iconUrl: "/numbers/num1.png",
		iconSize: [25, 25],
	}),
	new Icon({
		iconUrl: "/numbers/num1.png",
		iconSize: [25, 25],
	}),
	new Icon({
		iconUrl: "/numbers/num1.png",
		iconSize: [25, 25],
	}),
	new Icon({
		iconUrl: "/numbers/num1.png",
		iconSize: [25, 25],
	}),
	new Icon({
		iconUrl: "/numbers/num1.png",
		iconSize: [25, 25],
	}),
	new Icon({
		iconUrl: "/numbers/num1.png",
		iconSize: [25, 25],
	}),
	new Icon({
		iconUrl: "/numbers/num1.png",
		iconSize: [25, 25],
	}),
	new Icon({
		iconUrl: "/numbers/num1.png",
		iconSize: [25, 25],
	}),
	new Icon({
		iconUrl: "/numbers/num1.png",
		iconSize: [25, 25],
	}),
	new Icon({
		iconUrl: "/numbers/num1.png",
		iconSize: [25, 25],
	}),
	new Icon({
		iconUrl: "/numbers/num1.png",
		iconSize: [25, 25],
	}),
	new Icon({
		iconUrl: "/numbers/num1.png",
		iconSize: [25, 25],
	}),
	new Icon({
		iconUrl: "/numbers/num1.png",
		iconSize: [25, 25],
	}),
	new Icon({
		iconUrl: "/numbers/num1.png",
		iconSize: [25, 25],
	}),
	new Icon({
		iconUrl: "/numbers/num1.png",
		iconSize: [25, 25],
	}),
	new Icon({
		iconUrl: "/numbers/num1.png",
		iconSize: [25, 25],
	}),
	new Icon({
		iconUrl: "/numbers/num1.png",
		iconSize: [25, 25],
	}),
	new Icon({
		iconUrl: "/numbers/num1.png",
		iconSize: [25, 25],
	}),
	new Icon({
		iconUrl: "/numbers/num1.png",
		iconSize: [25, 25],
	}),
];

class HousesMap extends Component {
	state = {
		activeHouse: null,
		houses: houses,
	};

	handleError = (err) => {
		this.setState({
			msg: err.response.data.msg,
			status: err.response.data.status,
			loading: false,
		});
	};

	componentDidMount = () => {
		for (let i = 0; i < 25; i++) {
			numIcons[i] = new Icon({
				iconUrl: `/numbers/num${i + 1}.png`,
				iconSize: [25, 25],
			});
		}
		this.forceUpdate();
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

					{this.state.houses.map((house) => {
						return (
							new Date().getDate() >= house.day && (
								<Marker
									key={house.house_id}
									position={[house.houseLongLoc, house.houseLatLoc]}
									eventHandlers={{
										click: () => {
											this.setState({ activeHouse: [house] });
										},
									}}
									icon={numIcons[house.day - 1]}
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
