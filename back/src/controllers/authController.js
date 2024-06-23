import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


//Crear una funcion para el registro de usuario
export const register = async (req, res) => {
  //Tormar desde el front los datos del usuario y enviarlos a la base de datos
  try {
    const { nombre, apellido, email, password } = req.body
    const existingUser = await User.findOne({ where: { email } })
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.create({ nombre, apellido, email, password: hashedPassword })
    if (user) {
      res.status(201).json({ message: 'User registered successfully' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
}

//Crear una funcion de login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}

export const getAllUser = async (req, res) => {
  try {
    const response = await User.findAll()
    res.send(response)
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}


