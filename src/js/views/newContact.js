import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/newContact.css";

export const NewContact = () => {
  const { store, actions } = useContext(Context);
  const [contact, setContact] = useState({ name: "", last_name: "", phone: "", email: "", address: "", agenda_slug:"Mis cojones 33" })

  console.log("CONTACTO", contact);

  const handleSubmint = (e) => {
    e.preventDefault()
    fetch("https://playground.4geeks.com/apis/fake/contact/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact)
    })
      .then(resp => resp.json())
      .then(data => console.log("DATA",data))
      .catch(error => console.log(error))
  }


  return (
    <div className="container ">
      <h1>agregar contacto</h1>
      <form className="new-contact" onChange={handleSubmint}>
        <input 
          type="text" 
          name="name" 
          placeholder="Nombre" 
          className="form-control" 
          value={contact.name} 
          onChange={(e) => setContact({...contact, name: e.target.value })} 
        />
        <input 
          type="text" 
          name="last_name" 
          placeholder="Apellido" 
          className="form-control" 
          value={contact.last_name} 
          onChange={(e) => setContact({...contact, last_name: e.target.value })} 
        />
        <input 
          type="phone" 
          name="phone" 
          placeholder="Telefono" 
          className="form-control" 
          value={contact.phone} 
          onChange={(e) => setContact({...contact, phone: e.target.value })} 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Correo electronico" 
          className="form-control" 
          value={contact.email} 
          onChange={(e) => setContact({...contact, email: e.target.value })} 
        />
        <input 
          type="text" 
          name="address" 
          placeholder="Direccion" 
          className="form-control" 
          value={contact.address} 
          onChange={(e) => setContact({...contact, address: e.target.value })} 
        />
      </form>
      <button>Añadir contacto</button>
    </div>
  );
}


