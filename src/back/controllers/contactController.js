import contact from "../models/contactModel.js";

//Traer todos los contactos
export const getAllContacts = async (req, res) => {
  try {
    const response = await contact.findAll()
    if (response.length === 0) {
      return res.status(400).send('There are no contacts')
    }
    res.send(response)
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}

//Traer un contacto por su ID
export const getContact = async (req, res) => {
  try {
    const { id } = req.params
    const response = await contact.findByPk(id)
    if (!response) {
      return res.status(400).send('Contact not found')
    }
    res.send(response)
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}

//Crear un nuevo contacto
export const createContact = async (req, res) => {
  try {
    const { nombre, apellido, telefono, email, foto, direccion, notas } = req.body;

    if (!req.user || !req.user.id) {
      return res.status(401).json('Unauthorized: User not authenticated');
    }

    if (!nombre || !apellido || !telefono || !email) {
      return res.status(400).json('Missing required fields');
    }

    const newContact = await contact.create({
      userId: req.user.id,
      nombre,
      apellido,
      telefono,
      email,
      foto,
      direccion,
      notas,
    });
    if (newContact) {
      res.status(201).json('Contact created successfully');
    }
  } catch (error) {
    res.status(500).json('Server error');
  }
};

//Actualizar un contacto por su ID
export const updateContact = async (req, res) => {
  const { id } = req.params;
  const updateFields = req.body; //Obtener los campos a actualizar del cuerpo de la solicitud

  try {
    const Contact = await contact.findByPk(id);
    if (!Contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    await Contact.update(updateFields); //Actualiza solo los campos proporcionados
    res.status(200).json('Contact updated successfully'); //Devuelve el contacto actualizado
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

//Eliminar un contacto por su ID
export const deleteContact = async (req, res) => {
  const { id } = req.params;

  try {
    const Contact = await contact.findByPk(id);
    if (!Contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    await Contact.destroy();
    res.json({ message: 'Contact deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


