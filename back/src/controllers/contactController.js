import contact from "../models/contactModel.js";

//Traer todos los contactos
export const getAllContacts = async (req, res) => {
  try {
    const response = await contact.findAll()
    res.send(response)
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}

//Traer un contacto por su ID
export const getContact = async (req, res) => {
  try {
    const { id } = req.params
    const response = await contact.findOne(id)
    res.send(response)
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}

//Crear un nuevo contacto
export const createContact = async (req, res) => {
  const { nombre, apellido, telefono, email, foto, direccion, notas } = req.body;

  try {
    const newContact = await Contact.create({
      userId: req.user.id,
      nombre,
      apellido,
      telefono,
      email,
      foto,
      direccion,
      notas,
    });

    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

//Actualizar un contacto por su ID
export const updateContact = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, telefono, email, foto, direccion, notas } = req.body;

  try {
    const contact = await Contact.findByPk(id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    contact.nombre = nombre;
    contact.apellido = apellido;
    contact.telefono = telefono;
    contact.email = email;
    contact.foto = foto;
    contact.direccion = direccion;
    contact.notas = notas;

    await contact.save();
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

//Eliminar un contacto por su ID
export const deleteContact = async (req, res) => {
  const { id } = req.params;

  try {
    const contact = await Contact.findByPk(id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    await contact.destroy();
    res.json({ message: 'Contact deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


