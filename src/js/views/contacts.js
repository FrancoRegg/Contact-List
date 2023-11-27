import React from "react";
import "../../styles/contacts.css";
import { Link } from "react-router-dom";

export const Contacts = () => {

  return (
    <div className="">
      <h1>TODOS LOS CONTACTOS</h1>
      <Link to="/add-contact">
        <button>añadir contacto</button>
      </Link>
    </div>
  )
};