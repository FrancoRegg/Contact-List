import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "../../styles/edit.css";

export const Edit = () => {
  const [editContact, setEditContact] = useState({ full_name: "", phone: "", email: "", address: "", agenda_slug: "mis_cojones_33" })
  const { id } = useParams()
  const navigate = useNavigate()

  console.log("DATOS", editContact)

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
      .then(data => console.log("DATOS PROMESA", data))
      .catch(error => console.log(error))

    setTimeout(() => {
      navigate("/")
    }, 2000)
  }

  return (
    <div className="container ">
      <h1 className="titulo">editar Contacto</h1>
      <form className="editar-contacto" onSubmit={handleSubmint}>
        <div className="contenedor-inputs">
          <input
            type="text"
            name="full_name"
            placeholder="Nombre completo"
            className="form-edit"
            value={editContact.full_name || ""}
            onChange={(e) => setEditContact({ ...editContact, full_name: e.target.value })}
          />
          <input
            type="phone"
            name="phone"
            placeholder="Telefono"
            className="form-edit"
            value={editContact.phone || ""}
            onChange={(e) => setEditContact({ ...editContact, phone: e.target.value })}
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electronico"
            className="form-edit"
            value={editContact.email || ""}
            onChange={(e) => setEditContact({ ...editContact, email: e.target.value })}
          />
          <input
            type="text"
            name="address"
            placeholder="Direccion"
            className="form-edit"
            value={editContact.address || ""}
            onChange={(e) => setEditContact({ ...editContact, address: e.target.value })}
          />
        </div>
        <div className="contenedor-opciones">
          <button className="boton-guardar">guardar cambios</button>
          <Link className="boton-back" to="/"><i class="fas fa-arrow-left"></i></Link>
        </div>
      </form>
    </div>
  );
};