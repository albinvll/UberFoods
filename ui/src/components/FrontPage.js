import React, { useState, useEffect } from "react";
import Hero from "./FrontPage/Hero";
import NavBar from "./Navbar/Navbar";
import Subcribe from "./FrontPage/Subscribe";
import Registration from "./FrontPage/Registration";
import FrontFood from "./FrontPage/FrontFood";
import "./style.css";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { connect } from "react-redux";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const FrontPage = ({ cart }) => {

	const [cartCount, setCartCount] = useState(0);
	
	useEffect(() => {
		let count = 0;
		cart.forEach(element => {
			count += element.qty;
		});

		setCartCount(count);
	}, [cart, cartCount])

  return (
    <div className="app">
      <NavBar />
      <Hero />
      <FrontFood />
      <Registration />
      <Subcribe />
      <Link to="/cart">
        <a className="fixedButton" href>
          <div className="roundedFixedBtn">
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={cartCount} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </div>
        </a>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
	return {
	  cart: state.food.cart,
	};
};

export default connect(mapStateToProps)(FrontPage);
