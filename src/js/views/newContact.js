import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/newContact.css";

export const NewContact = () => {
  const { store, actions } = useContext(Context);
  const [contact, setContact] = useState({ name: "", last_name: "", phone: "", email: "", address: "" })
  
  console.log("CONTACTO", contact);
  

  return (
    <div className="container ">
      <h1>agregar contacto</h1>
      <form className="new-contact">
        <input type="text" name="name" placeholder="Nombre" className="form-control" value={contact.name} onChange={(e)=>setContact({ name: e.target.value})}/>
        <input type="text" name="last_name" placeholder="Apellido" className="form-control" value={contact.last_name} onChange={(e)=>setContact({ last_name: e.target.value})}/>
        <input type="phone" name="phone" placeholder="Telefono" className="form-control" value={contact.phone} onChange={(e)=>setContact({ phone: e.target.value})}/>
        <input type="email" name="email" placeholder="Correo electronico" className="form-control" value={contact.email} onChange={(e)=>setContact({ email: e.target.value})}/>
        <input type="text" name="address" placeholder="Direccion" className="form-control" value={contact.address} onChange={(e)=>setContact({ address: e.target.value})}/>
      </form>
    </div>
  );
};


