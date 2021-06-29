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
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => (
            <Link to={item.url} style={{ textDecoration: "none" }} key={index} id="navbar-link">
              <li>
                <span className={item.cName}>{item.title}</span>
              </li>
            </Link>
          ))}
        </ul>
        <Link to="/login">
          <button className="btn order-btn">
            Sign in
          </button>
        </Link>
      </nav>
    );
	}
}

export default Navbar;
