import React, { useState, useEffect } from "react";
import Food from "./Food";
import "./Foods.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import client from "../../axios";

const Foods = (props) => {
	const [products, setProducts] = useState([]);

	const fetchData = async () => {
		const response = await client.get("Articles/getArticlesFromRestaurantId", {
			params: {
				menuId: props.location.state.menuId,
			},
		});
		if(response && response.data){
      setProducts(response.data);
		}
	};

	useEffect(() => {
		if (props?.location?.state?.menuId && props?.location?.state?.menuId > 0) {
			fetchData();
		} else {
			props.history.push("/");
		}
	}, []);

	return (
		<div>
			<Navbar />

			<div className="foods-mainSection">
				<div className="foods-food-container">
					<h3>Foods</h3>
					<p>Choose the food you love the most!</p>

					{products.length>0 ? products.map((food) => (
						<Food key={food.id} foodData={food} restaurantId={props?.location?.state?.restaurantId}/>
					)):<></>}
				</div>
				<div className="foods-right-container">
					<div className="food-right-title">
						<h4 style={{ textDecoration: "none" }}>
							Found the food you were looking ?
						</h4>
						<p>Go to your cart and procced to the payment!</p>
					</div>
					<Link to="/cart">
						<button className="food-right-button">
							Continue to your cart
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Foods;
