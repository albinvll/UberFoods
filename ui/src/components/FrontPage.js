import React from "react";
import Hero from "./FrontPage/Hero";
import NavBar from "./Navbar/Navbar";
import Subcribe from "./FrontPage/Subscribe";

const FrontPage = () => {
	return (
		<div className="app">
			<NavBar />
			<Hero />
			<Subcribe />
		</div>
	);
};

export default FrontPage;
