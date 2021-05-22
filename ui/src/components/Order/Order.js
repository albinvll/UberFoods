import React, { PureComponent } from "react";
import "./Order.css";
import client from "../../axios";

export default class Order extends PureComponent {
	
	componentDidMount() {
		client.get("Restaurant/getRestaurant")
		.then((response) => {
			this.setState({selectedLocation: response.data})
		});
	}

	/*
	componentDidMount() {
		client.get("Articles/getArticlesFromRestaurantId", {params: {menuId: menuId}})
		.then((response) => {
			setState({availableArticles: response.data})
		});
	}
	*/

	state = {
		selectedLocation: [
			
		],



		availableArticles: [
			{
				id: 1,
				pershkrimi: "Hamburger double",
				cmimi: 2.5,
			},
			{
				id: 2,
				pershkrimi: "Hamburger pule",
				cmimi: 2,
			},
			{
				id: 3,
				pershkrimi: "Standard Hamburger",
				cmimi: 1,
			},
		],

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
        cardNumber:"",
        cardName:"",
        cardDate:"",
        cardCVV:"",
        selectedRestaurant:""

	};
	onCityChangeText = (event) => {
		this.setState({ city: event.target.value });
	};
    onPersonNameText=(event)=>{
        this.setState({personName:event.target.value});
    }
    onCardNumberText=(event)=>{
        this.setState({cardNumber:event.target.value});
    }
    onCardNameText=(event)=>{
        this.setState({cardName:event.target.value});
    }
    onCardDateText=(event)=>{
        this.setState({cardDate:event.target.value});
    }
    onCardCVVText=(event)=>{
        this.setState({cardCVV:event.target.value});
    }


	handleChangeCheckBox = async (event, food) => {
		const isChecked = event.target.checked;
		if (isChecked) {
			await this.setState({
				selectedArticles: [...this.state.selectedArticles, food],
			});
		} else {
			await this.setState({
				selectedArticles: this.state.selectedArticles.filter(
					(element) => element !== food
				),
			});
		}
		this.calculateSum();
	};


    handleChangeRestaurant = async (event, location) => {
		const selectedRestaurantId = event.target.value.split("|")[0];
		await this.setState({selectedRestaurant:selectedRestaurantId});;
		client.get("Articles/getArticlesFromRestaurantId", {params: {menuId:selectedRestaurantId}})
		.then((response) => {
			this.setState({availableArticles: response.data})
		});
	};

	calculateSum = async () => {
		if (!(this.state.selectedArticles.length > 0)) {
			await this.setState({ selectedSum: 0 });
			return;
		}
		let sum = 0;
		for (let i = 0; i < this.state.selectedArticles.length; ++i) {
			sum += this.state.selectedArticles[i].cmimi;
		}
		await this.setState({ selectedSum: sum });
	};

    
	render() {
		return (
			<div>
				{/*<Navbar />*/}
				<section className="order-Main-Section">
					<div className="order-left-side">
						<h1 id="order-title">Order Food</h1>
						<p id="order-desc">
							Please full fill your informations below :
						</p>
						<br />
						<form action="">
							Full name
							<input 
                                id="order-input" 
                                type="text" 
                                value={this.state.personName}
                                onChange={this.onPersonNameText}/>
							City
							<input
								id="order-input"
								type="text"
								value={this.state.city}
								onChange={this.onCityChangeText}
							/>
							Restaurant
							<select id="order-input-selected" onChange={this.handleChangeRestaurant}>
								{this.state.selectedLocation.map((location) => (
									<option key={location.id}
                                    /*onChange={(event) =>
                                        this.handleChangeRestaurant(
                                            event,
                                            location
                                        )
                                    }*/>
										{location.menuId| location.description}
									</option>
								))}
							</select>
							Payment method
							<select id="order-input-selected">
								{this.state.paymentMethod.map((payment) => (
									<option key={payment.id} value="">
										{payment.pershkrimi}
									</option>
								))}
							</select>
							<div className="order-checkbox">
								{this.state.availableArticles.map((food) => (
									<label key={food.id} id="checkbox-label">
										<input
											onChange={(event) =>
												this.handleChangeCheckBox(
													event,
													food
												)
											}
											id="order-checkbox"
											type="checkbox"
										/>
										{food.description}
									</label>
								))}
							</div>
						</form>
					</div>

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
						</form>

						<div className="order-total">
							<div id="order-desc">
								Total shuma:
								{this.state.selectedSum &&
								this.state.selectedSum > 0
									? this.state.selectedSum
									: ""}
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
