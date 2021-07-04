import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import "./Cart.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	card: {
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
	},
});

const Cart = ({ cart }) => {
	const classes = useStyles();

	const [totalPrice, setTotalPrice] = useState(0);
	const [totalItems, setTotalItems] = useState(0);

	useEffect(() => {
		if (cart.length === 0) {
			localStorage.removeItem("orderedRestaurantId");
		}
		let items = 0;
		let price = 0;

		cart.forEach((item) => {
			items += item.qty;
			price += item.qty * item.price;
		});

		setTotalPrice(price);
		setTotalItems(items);
	});

	return (
		<div className="cart-mainSection">
			<div className="cart-title">
				<h1>Your cart</h1>
			</div>
			<div className="cart-content-items">
				<div className="cart-pickeditems">
					{cart.map((item) => (
						<CartItem key={item.id} cartItemData={item} />
					))}
				</div>
				<div className="cart-checkout">
					<Card className={classes.root}>
						<CardContent className={classes.card}>
							<Typography variant="h5" component="h2">
								Cart Summary
							</Typography>
							<Typography
								className={classes.pos}
								color="textSecondary"
							></Typography>
							<Typography variant="body2" component="p">
								TOTAL : {totalItems} items
							</Typography>
							<Typography variant="h6" component="h3">
								Price : ${totalPrice}
							</Typography>
						</CardContent>
						<CardActions>
							{cart.length > 0 ? (
								<Link to="/order">
									<Button variant="contained" color="primary">
										Checkout
									</Button>
								</Link>
							) : (
								<></>
							)}
						</CardActions>
					</Card>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		cart: state.food.cart,
	};
};

export default connect(mapStateToProps)(Cart);
