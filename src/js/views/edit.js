import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Edit = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="jumbotron">
			<h1>EDITAR CONTACTO</h1>
		</div>
	);
};

