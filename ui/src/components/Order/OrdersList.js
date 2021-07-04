import {
	Table,
	TableBody,
	TableHead,
	TableCell,
	TableRow,
} from "@material-ui/core";
import React, { Component } from "react";
import client from "../../axios";

export default class OrdersList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ordersList: [],
		};
	}
	componentDidMount = () => {
		this.fillOrdersList();
	};

	onAcceptClick = async (event, order) => {
		event.preventDefault();
		const accountTypeId = localStorage.getItem("accountTypeId");
		console.log(order);
		if (accountTypeId == 1) {
			if (!order.acceptDate && order.pickUpDate) {
				await this.ordererAccept(order.id);
				await this.fillOrdersList();
			}
		} else if (accountTypeId == 2) {
			if (!order.acceptDate && !order.pickUpDate) {
				await this.deliveryAccept(order.id);
				await this.fillOrdersList();
			}
		}
	};
	render() {
		return (
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Id</TableCell>
						<TableCell>Orderer Name</TableCell>
						<TableCell>Restaurant Name</TableCell>
						<TableCell>Ordered Date</TableCell>
						<TableCell>Preparation Date</TableCell>
						<TableCell>Pick up Date</TableCell>
						<TableCell>Accept Date</TableCell>
						<TableCell>ACCEPT </TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{this.state.ordersList &&
					this.state.ordersList.length > 0 ? (
						this.state.ordersList.map((element) => (
							<TableRow>
								<TableCell>{element.id}</TableCell>
								<TableCell>{element.ordererName}</TableCell>
								<TableCell>{element.restaurantName}</TableCell>
								<TableCell>{element.orderedDate}</TableCell>
								<TableCell>{element.preparationDate}</TableCell>
								<TableCell>{element.pickUpDate}</TableCell>
								<TableCell>{element.acceptDate}</TableCell>
								<TableCell>
									<button
										onClick={(event) =>
											this.onAcceptClick(event, element)
										}
									>
										ACCEPT
									</button>
								</TableCell>
							</TableRow>
						))
					) : (
						<></>
					)}
				</TableBody>
			</Table>
		);
	}
	fillOrdersList = async () => {
		const response = await client.get("Order/getOrdersListForAccount", {
			params: {
				userId: localStorage.getItem("userId"),
				accountTypeId: localStorage.getItem("accountTypeId"),
			},
		});
		if (response && response.data) {
			this.setState({ ordersList: response.data });
		}
	};

	ordererAccept = (orderId) => {
		client
			.get("Order/ordererAccept", { params: { orderId } })
			.then((response) => console.log(response.data))
			.catch((error) => console.error(error.response.data));
	};

	deliveryAccept = (orderId) => {
		client
			.get("Order/deliveryAccept", {
				params: { orderId, userId: localStorage.getItem("userId") },
			})
			.then((response) => console.log(response.data))
			.catch((error) => console.error(error.response.data));
	};
}
