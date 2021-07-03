import React, { Component } from "react";
import * as auth from "../../Auth";
import { Redirect } from "react-router-dom";

export class Logout extends Component {
	async componentDidMount() {
		auth.logout();
	}

	render() {
		return <Redirect to={"/login"} />;
	}
}

export default Logout;
