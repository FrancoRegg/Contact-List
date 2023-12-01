import React, { useContext, useEffect, useState } from "react";
import "../../styles/contacts.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Contacts = () => {
  const { store, actions } = useContext(Context)
  const [infoContact, setInfoContact] = useState([])

  console.log("INFO CONT", infoContact);

//Trae todos los contactos de una agenda en particular
  useEffect(() => {
    actions.getContact();
  }, [])

  const confirmDeleteContact = (id) => {
    const confirmed = window.confirm("¿Estás seguro de que quieres eliminar este contacto?");
    if (confirmed) {
      deleteContact(id);
    }
  };

  const deleteContact = (id) => {
    fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
      method: 'DELETE',
      headers: {"Content-Type": "application/json"}
    })
      .then(resp => resp.json())
      .then((data) => {
        // Actualizar la lista de contactos después de la eliminación
        setInfoContact(infoContact.filter((contact) => contact.id !== id));
        console.log(data);
      })
      .catch(error => console.log(error))
  }


  return (
    <div className="container">
      <h1>TODOS LOS CONTACTOS</h1>
      <div className="lista-contactos">
        {infoContact.map((value) => (
          <div className="datos-contactos" key={value.id}>
            <strong className="nombre-contacto"><i className="fas fa-user"></i>{value.full_name}</strong>
            <p className="telefono-contacto"><i className="fas fa-phone"></i>{value.phone}</p>
            <p className="correo-contacto"><i className="fas fa-envelope"></i>{value.email}</p>
            <p className="direccion-contacto"><i class="fas fa-map-pin"></i>{value.address}</p>
            <Link to={`/edit-contact/${value.id}`}>
              <button><i className="fas fa-pen"></i></button>
            </Link>
            <button onClick={()=>confirmDeleteContact(value.id)}><i class="fas fa-trash"></i></button>
          </div>
        ))}
      </div>
      <Link to="/add-contact">
        <button>nuevo contacto</button>
      </Link>
    </div>
  )
};