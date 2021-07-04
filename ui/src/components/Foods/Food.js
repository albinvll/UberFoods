import React from "react";

import { connect, useSelector } from "react-redux";
import { addToCart } from "../../redux/food-order/actions";
import "./Foods.css";
import Burger from "../../../src/assets/burder.jpg";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Food = ({ foodData, addToCart, restaurantId }) => {
	const [value, setValue] = React.useState(5);
	const cartState = useSelector((state) => state.food.cart);

	const addFoodToCart = (event, foodData) => {
		const orderedRestaurantId = localStorage.getItem("orderedRestaurantId");
		if (!orderedRestaurantId) {
			localStorage.setItem("orderedRestaurantId", restaurantId);
		} else {
			if (cartState.length > 0 && orderedRestaurantId != restaurantId) {
				toast.error(
					"This article is from another restaurant! Please get rid of items from that restaurant to order this one"
				);
				return;
			}
			addToCart(foodData);
			toast.success("Added to cart");
		}
	};
	return (
		<div className="food-container">
			<div className="food-image">
				<img src={Burger} alt="" />
			</div>
			<div className="food-desc">
				<div className="food-desc-title">
					<h5>{foodData.description}</h5>
				</div>
				<div className="food-desc-price">
					<p>${foodData.price}</p>
				</div>
				<div className="food-desc-rating">
					<Box component="fieldset" mb={3} borderColor="transparent">
						<Rating
							name="simple-controlled"
							value={value}
							readOnly
						/>
					</Box>
				</div>
			</div>
			<div className="food-action">
				<button
					id="foodpage-action"
					onClick={(event) => addFoodToCart(event, foodData)}
				>
					Add to cart
				</button>
				<ToastContainer />
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (item) => dispatch(addToCart(item)),
	};
};

export default connect(null, mapDispatchToProps)(Food);
