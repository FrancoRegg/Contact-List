import User from "../models/userModel.js";

//Traer todos los usuarios
export const getAllUser = async (req, res) => {
  try {
    const response = await User.findAll();
    res.send(response);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

//Traer un usuario por ID

//Actualizar un usuario por ID

//Eliminar un usuarios por ID
