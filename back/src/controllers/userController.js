import User from "../models/userModel.js";

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


//Eliminar un usuarios por ID
