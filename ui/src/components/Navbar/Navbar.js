import React, { PureComponent } from "react";
import { menuItems } from "./MenuItems";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { isLoggedIn } from "../../Auth";

class Navbar extends PureComponent {
	state = {
		clicked: false,
	};
	componentDidMount = () => {
		this.setState({ isLoggedIn: isLoggedIn() });
	};

	handleClick = () => {
		this.setState({ clicked: !this.state.clicked });
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
					{menuItems().map((item, index) => (
						<Link
							to={item.url}
							style={{ textDecoration: "none" }}
							key={index}
							id="navbar-link"
						>
							<li>
								<span className={item.cName}>{item.title}</span>
							</li>
						</Link>
					))}
				</ul>
				{!this.state.isLoggedIn ? (
					<Link to="/login">
						<button className="btn order-btn">Sign in</button>
					</Link>
				) : (
					<Link to="/logout">
						<button className="btn order-btn">Log out</button>
					</Link>
				)}
			</nav>
		);
	}
}

export default Navbar;
