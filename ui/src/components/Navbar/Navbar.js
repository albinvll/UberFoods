import React, { PureComponent } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends PureComponent {
	state = {
		clicked: false,
	};

	handleClick = () => {
		this.setState({ clicked: !this.state.clicked });
	};

	onSignInButtonClick = (event) => {
		event.preventDefault();
		console.log(this.props.history);
	};

	render() {
		return (
			<nav className="NavbarItems">
				<h1 className="navbar-logo">
					<Link to="/">
						<span>Uberfoods</span>
					</Link>
				</h1>
				<div className="menu-icon" onClick={this.handleClick}>
					<i
						className={
							this.state.clicked ? "fas fa-times" : "fas fa-bars"
						}
					></i>
				</div>
				<ul
					className={
						this.state.clicked ? "nav-menu active" : "nav-menu"
					}
				>
					{MenuItems.map((item, index) => (
						<Link to={item.url} style={{ textDecoration: "none" }}>
							<li key={index}>
								<span className={item.cName}>{item.title}</span>
							</li>
						</Link>
					))}
				</ul>
				<button
					onClick={this.onSignInButtonClick}
					className={`btn btn--primary btn--medium`}
				>
					Sign in
				</button>
			</nav>
		);
	}
}

export default Navbar;
