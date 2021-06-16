import React from "react";
import Hero from "./FrontPage/Hero";
import NavBar from "./Navbar/Navbar";
import Subcribe from "./FrontPage/Subscribe";
import Registration from "./FrontPage/Registration";
import FrontFood from "./FrontPage/FrontFood";

const FrontPage = () => {
	return (
		<div className="app">
			<NavBar />
			<Hero />
			<FrontFood/>
			<Registration/>
			<Subcribe />
		</div>
	);
};

export default FrontPage;
