import React, { useContext, useEffect, useState } from "react";
import "../../styles/contacts.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Contacts = () => {
  const { store, actions } = useContext(Context)
  const [infoContact, setInfoContact] = useState([])


  useEffect(() => {
    fetch("https://playground.4geeks.com/apis/fake/contact/agenda/mis_cojones_33")
      .then(resp => resp.json())
      .then(data => setInfoContact(data))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="container">
      <h1>TODOS LOS CONTACTOS</h1>
      <div className="lista-contactos">
        {infoContact.map((value, index) => (
          <div className="datos-contactos" key={index}>
            <strong className="nombre-contacto"><i className="fas fa-user"></i>{value.full_name}</strong>
            <p className="telefono-contacto"><i className="fas fa-phone"></i>{value.phone}</p>
            <p className="correo-contacto"><i className="fas fa-envelope"></i>{value.email}</p>
            <p className="direccion-contacto"><i class="fas fa-map-pin"></i>{value.address}</p>
          </div>
        ))}
      </div>
      <Link to="/add-contact">
        <button>nuevo contacto</button>
      </Link>
    </div>
  )
};