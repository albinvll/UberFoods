import React, { useState, useEffect } from "react";
import Restaurant from "./Restaurant";
import "../Foods/Foods.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import client from "../../axios";

import { connect } from "react-redux";

const RestaurantList = (props) => {
	const [restaurants, setRestaurants] = useState([]);

	const fetchData = async () => {
		await client.get("Restaurant/getRestaurant").then((res) => {
			setRestaurants(res.data);
			console.log(res.data);
		});
	};

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<div>
			<Navbar />

			<div className="foods-mainSection">
				<div className="foods-food-container">
					<h3>Restaurants</h3>
					<p>Check out the restaurants menus</p>

					{restaurants.map((restaurant) => (
						<Restaurant
							key={restaurant.id}
							restaurantData={restaurant}
							props={props}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default RestaurantList;
