import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate, useParams } from "react-router-dom";

export const Edit = () => {
  const { store, actions } = useContext(Context);
  const [editContact, setEditContact] = useState({ full_name: "", phone: "", email: "", address: "", agenda_slug: "mis_cojones_33" })
  const { id } = useParams()
  const navigate = useNavigate()

  console.log("DATOS",editContact)

  useEffect(() => {
    // Aquí puedes realizar una solicitud para obtener la información del contacto con el ID actual
    fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`)
      .then(resp => resp.json())
      .then(data => setEditContact(data))
      .catch(error => console.log(error));
  }, [id]);

  const handleSubmint = (e) => {
    e.preventDefault()
    fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editContact)
    })
      .then(resp => resp.json())
      .then(data => console.log("DATOS PROMESA",data))
      .catch(error => console.log(error))

      navigate("/")
  }

  return (
    <div className="jumbotron">
      <div className="container ">
        <h1>editar Contacto</h1>
        <form className="editar-contacto" onSubmit={handleSubmint}>
          <input
            type="text"
            name="full_name"
            placeholder="Nombre completo"
            className="form-control"
            value={editContact.full_name || ""}
            onChange={(e) => setEditContact({ ...editContact, full_name: e.target.value })}
          />
          <input
            type="phone"
            name="phone"
            placeholder="Telefono"
            className="form-control"
            value={editContact.phone || ""}
            onChange={(e) => setEditContact({ ...editContact, phone: e.target.value })}
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electronico"
            className="form-control"
            value={editContact.email || ""}
            onChange={(e) => setEditContact({ ...editContact, email: e.target.value })}
          />
          <input
            type="text"
            name="address"
            placeholder="Direccion"
            className="form-control"
            value={editContact.address || ""} 
            onChange={(e) => setEditContact({ ...editContact, address: e.target.value })}
          />
          <button>guardar cambios</button>
        </form>
      </div>
    </div>
  );
};