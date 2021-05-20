import React, { PureComponent } from "react";
import "./Hero.css";
import { toast, ToastContainer } from "react-toastify";

class Hero extends PureComponent {
	state = {
		searchString: "",
	};
	onSearchStringChange = (event) => {
		this.setState({ searchString: event.target.value });
	};

	onCheckFoodClick = (event) => {
		event.preventDefault();
		if (this.state.searchString.length <= 0) {
			toast.error("Food name required!");
			return;
		}
	};
	render() {
		return (
			<div id="mainSection">
				<div id="contentContainer">
					<p className="contentParagraph">
						{" "}
						"People who love to eat are <br /> always the best
						people"
					</p>
					<div id="inputButton">
						<input
							value={this.state.searchString}
							placeholder="Search for food"
							id="searchInput"
							onChange={this.onSearchStringChange}
						/>
						<button id="searchButton" onClick={this.onCheckFoodClick}>
							Search
						</button>
						<ToastContainer/>
					</div>
				</div>
			</div>
		);
	}
}

export default Hero;
