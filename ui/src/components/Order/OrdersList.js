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

	onAcceptClick = (event, id) => {
		event.preventDefault();
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
											this.onAcceptClick(
												event,
												element.id
											)
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
}
