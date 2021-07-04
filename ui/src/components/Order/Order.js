import React, { PureComponent } from "react";
import "./Order.css";
import client from "../../axios";
import { Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { mapFoodOrderStateToProps } from "../../redux/connect/foodOrderConnect";
class Order extends PureComponent {
	state = {
		selectedLocation: [],

		availableArticles: [],

		paymentMethod: [
			{
				id: 1,
				pershkrimi: "Credit Card",
			},
		],
		selectedArticles: [],
		selectedSum: 0,
		personName: "",
		city: "",
		cardNumber: "",
		cardName: "",
		cardDate: "",
		cardCVV: "",
		comment: "",
		selectedRestaurant: "",
	};

	componentDidMount() {
		if (this.props.cart.length <= 0) {
			this.props.history.push("/");
		}
		/*client.get("Restaurant/getRestaurant").then((response) => {
			this.setState({ selectedLocation: response.data });
		});*/
		let sum = 0;
		for (let i = 0; i < this.props.cart.length; ++i) {
			sum += this.props.cart[i].price * this.props.cart[i].qty;
		}
		this.setState({ selectedSum: sum });
	}

	onCityChangeText = (event) => {
		this.setState({ city: event.target.value });
	};
	onPersonNameText = (event) => {
		this.setState({ personName: event.target.value });
	};
	onCardNumberText = (event) => {
		this.setState({ cardNumber: event.target.value });
	};
	onCardNameText = (event) => {
		this.setState({ cardName: event.target.value });
	};
	onCardDateText = (event) => {
		this.setState({ cardDate: event.target.value });
	};
	onCardCVVText = (event) => {
		this.setState({ cardCVV: event.target.value });
	};
	onCommentText = (event) => {
		this.setState({ comment: event.target.value });
	};

	onFinishOrderClick = (event) => {
		event.preventDefault();
		const cart = this.props.cart.map((x) => x);
		const restaurantId = localStorage.getItem("orderedRestaurantId");
		const userId = localStorage.getItem("userId");
		const orderHeader = {
			ordererId: parseInt(userId),
			restaurantId: parseInt(restaurantId),
			comment: this.state.comment,
		};
		cart.forEach((element) => delete element.description);
		const order = {
			orderHeader,
			orderArticles: cart,
		};
		console.log(order);
		client
			.post("Order/finishOrder", order)
			.then((response) => {
				console.log("Ok");
				this.props.history.push("/");
			})
			.catch((error) => console.log(error));
	};

	render() {
		return (
			<div>
				{/*<Navbar />*/}
				<section className="order-Main-Section">
					<p>Payment method</p>
					<select id="order-input-selected">
						{this.state.paymentMethod.map((payment) => (
							<option key={payment.id} value="">
								{payment.pershkrimi}
							</option>
						))}
					</select>
					<div className="order-right-side">
						<p id="order-desc">
							Please full fill your credit card informations below
							:
						</p>
						<form action="">
							Credit Card Number
							<input
								placeholder="1234 1234 1234"
								id="order-input"
								type="number"
								value={this.state.cardNumber}
								onChange={this.onCardNumberText}
							/>
							Credit Card Name
							<input
								placeholder="John John"
								id="order-input"
								type="text"
								value={this.state.cardName}
								onChange={this.onCardNameText}
							/>
							Exp Date
							<input
								placeholder="04/24"
								id="order-input"
								type="text"
								value={this.state.cardDate}
								onChange={this.onCardDateText}
							/>
							CVV
							<input
								placeholder="123"
								id="order-input"
								type="text"
								value={this.state.cardCVV}
								onChange={this.onCardCVVText}
							/>
							Comment
							<input
								placeholder="Comment..."
								id="order-input"
								type="text"
								value={this.state.comment}
								onChange={this.onCommentText}
							/>
						</form>

						<div className="order-total">
							<div id="order-desc">
								Total shuma:
								{this.state.selectedSum &&
								this.state.selectedSum > 0
									? this.state.selectedSum
									: ""}{" "}
								&euro;
							</div>
						</div>
						<button onClick={this.onFinishOrderClick}>
							FINISH ORDER
						</button>
					</div>
				</section>
			</div>
		);
	}
}
export default connect(mapFoodOrderStateToProps)(Order);
