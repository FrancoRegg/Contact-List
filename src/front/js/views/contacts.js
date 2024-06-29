import React, { useContext, useEffect } from "react";
import "../../styles/contacts.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";


export const Contacts = () => {
  const { store, actions } = useContext(Context)

  console.log("STORE", store.contacts);

  //Trae todos los contactos de una agenda en particular
  useEffect(() => {
    actions.getContact()
  }, [])

  const confirmDeleteContact = (id) => { //Muestra opcion para confirmar o cancelar la eliminacion
    const confirmed = window.confirm("¿Estás seguro de que quieres eliminar este contacto?");
    if (confirmed) { //Si se confirma, se ejecuta la siguente funcion
      actions.deleteContact(id)
        .then(() => {  //Si se elimina el contacto, cargar la lista actualizada
          actions.getContact()
        })
    }
  };

  return (
    <div className="container">
      <h1 className="titulo">tus contactos</h1>
      <div className="lista-contactos">
        {store.contacts.map((value) => (
          <div className=" row datos-contactos" key={value.id}>
            <div className="col-9">
              <strong className="nombre-contacto"><i className="fas fa-user"></i>{value.full_name}</strong>
              <p className="telefono-contacto"><i className="fas fa-phone"></i>{value.phone}</p>
              <p className="correo-contacto"><i className="fas fa-envelope"></i>{value.email}</p>
              <p className="direccion-contacto"><i className="fas fa-map-pin"></i>{value.address}</p>
            </div>
            <div className="col-3 botones-opciones">
              <Link to={`/edit-contact/${value.id}`}>
                <button className="boton-editar"><i className="fas fa-pen"></i></button>
              </Link>
              <button className="boton-eliminar" onClick={() => confirmDeleteContact(value.id)}><i className="fas fa-trash"></i></button>
            </div>
          </div>
        ))}
      </div>
      <hr />
      <Link to="/add-contact">
        <button className="boton-contacto">nuevo contacto</button>
      </Link>
    </div>
  )
};