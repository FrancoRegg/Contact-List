import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/newContact.css";

export const NewContact = () => {
  const { store, actions } = useContext(Context);
  const [contact, setContact] = useState({ full_name: "", phone: "", email: "", address: "", agenda_slug: "mis_cojones_33" })
  const navigate = useNavigate()
  console.log("CONTACTO", contact);

  const handleSubmint = (e) => {
    e.preventDefault()
   
    actions.addContact(contact)
      
    setTimeout(() => {
      navigate("/")
    }, 1000)

  }
  return (
    <div className="container ">
      <h1 className="titulo">agregar contacto</h1>
      <form className="new-contact" onSubmit={handleSubmint}>
        <input
          type="text"
          name="full_name"
          placeholder="Nombre completo"
          className="form-control"
          value={contact.full_name}
          onChange={(e) => setContact({ ...contact, full_name: e.target.value })}
        />
        <input
          type="phone"
          name="phone"
          placeholder="Telefono"
          className="form-control"
          value={contact.phone}
          onChange={(e) => setContact({ ...contact, phone: e.target.value })}
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electronico"
          className="form-control"
          value={contact.email}
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
        />
        <input
          type="text"
          name="address"
          placeholder="Direccion"
          className="form-control"
          value={contact.address}
          onChange={(e) => setContact({ ...contact, address: e.target.value })}
        />
        <div className="contenedor-opciones">
          <button className="boton-contacto">Añadir contacto</button>
          <Link className="boton-back" to="/"><i class="fas fa-arrow-left"></i></Link>
        </div>
      </form>
    </div>
  );
}


