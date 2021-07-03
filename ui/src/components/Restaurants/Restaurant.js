import React from "react";

import { connect } from "react-redux";
import { addToCart } from "../../redux/food-order/actions";
import "../Foods/Foods.css";
import RestaurantImg from "../../../src/assets/restaurant.jpg";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Restaurant = ({ restaurantData, addToCart, props }) => {
	const [value, setValue] = React.useState(5);

	const notify = () => toast.success("Added to cart");
	const onRestaurantClick = (event, id) => {
    event.preventDefault();
		props.history.push("/foods", {
			menuId: id,
		});
	};

	return (
		<div
			className="food-container"
			onClick={(event) => onRestaurantClick(event, restaurantData.id)}
		>
			<div className="food-image">
				<img src={RestaurantImg} alt="" style={{ width: "89%" }} />
			</div>
			<div className="food-desc">
				<div className="food-desc-title">
					<p>
						{restaurantData.description}
					</p>
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
				<p>
					<button id="foodpage-action"> Check menu</button>
				</p>
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

export default connect(null, mapDispatchToProps)(Restaurant);
