import jwt from 'jsonwebtoken'
import User from '../models/userModel.js';

const middleware = async (req, res, next) => {

  const authHeader = req.headers['authorization']
  if (!authHeader) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }
  const token = authHeader.replace('Bearer ', '')

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.id);
    if (!user) {
      return res.status(404).json("User not found");
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};
export default middleware