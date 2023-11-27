import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/newContact.css";

export const NewContact = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container ">
      <h1>agregar contacto</h1>
      <form className="new-contact">
        <input type="text" name="name" placeholder="Nombre" className="form-control"/>
        <input type="text" name="last name" placeholder="Apellido" className="form-control"/>
        <input type="number" name="phone" placeholder="Telefono" className="form-control"/>
        <input type="email" name="email" placeholder="Correo electronico" className="form-control"/>
        <input type="text" name="address" placeholder="Direccion" className="form-control"/>
      </form>
    </div>
  );
};


