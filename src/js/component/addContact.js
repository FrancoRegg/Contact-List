import React from "react";
import { Link } from "react-router-dom";

export const AddContact = () => {
	return (
		<div className="ml-auto">
			<Link to="/demo">
				<button className="btn btn-success">Add new contact</button>
			</Link>
		</div>
		
		/*<nav className="navbar navbar-light bg-white mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"></span>
			</Link>
			
		</nav> */
	);
};
