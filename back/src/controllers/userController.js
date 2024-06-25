import User from "../models/userModel.js";
import bcrypt from 'bcryptjs';

//Traer todos los usuarios
export const getAllUsers = async (req, res) => {
  try {
    const response = await User.findAll();
    res.send(response);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

//Traer un usuario por ID
export const getUser = async (req, res) => {
  try {
    const { id } = req.params
    const response = await User.findByPk(id)
    res.send(response)
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}

//Actualizar un usuario por ID
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, password } = req.body;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json('User not found');
    }
    if (nombre !== undefined) {
      user.nombre = nombre;
    }
    if (apellido !== undefined) {
      user.apellido = apellido;
    }
    if (password !== undefined) {
      const hashedPassword = await bcrypt.hash(password, 10)
      user.password = hashedPassword;
    }

    await user.save();
    res.status(200).json('User updated successfully');
  } catch (error) {
    res.status(500).json('Server error');
  }
};

//Eliminar un usuarios por ID
