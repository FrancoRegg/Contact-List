import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container ">
			<h1>Add a new contact</h1>
			<ul className="list-group">
				<form>
					<div className="mb-3">
						<label for="exampleInputEmail1" className="form-label">Full Name</label>
						<input type="text" className="form-control" id="exampleInputEmail1" placeholder="Full Name" aria-describedby="emailHelp"/>
					</div>
					<div className="mb-3">
						<label for="exampleInputPassword1" className="form-label">Email</label>
						<input type="email" className="form-control" placeholder="Enter email" id="exampleInputPassword1"/>
					</div>
					<div className="mb-3">
						<label for="exampleInputPassword1" className="form-label">Phone</label>
						<input type="phone" className="form-control" placeholder="Enter phone" id="exampleInputPassword1"/>
					</div>
					<div className="mb-3">
						<label for="exampleInputPassword1" className="form-label">Address</label>
						<input type="address" className="form-control" placeholder="Enter address" id="exampleInputPassword1"/>
					</div>
					<button type="submit" className="btn btn-primary w-100">Save</button>
				</form>
			</ul>
			<Link to="/">
				<span className="">or get back to contacts</span>
			</Link>
		</div>
	);
};


/*{store.demo.map((item, index) => {
	return (
		<li
			key={index}
			className="list-group-item d-flex justify-content-between"
			style={{ background: item.background }}>
			<Link to={"/single/" + index}>
				<span>Link to: {item.title}</span>
			</Link>
			{// Conditional render example
			// Check to see if the background is orange, if so, display the message
			item.background === "orange" ? (
				<p style={{ color: item.initial }}>
					Check store/flux.js scroll to the actions to see the code
				</p>
			) : null}
			<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
				Change Color
			</button>
		</li>
	);
})}
*/