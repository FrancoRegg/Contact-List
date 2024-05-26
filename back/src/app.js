import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { connectDB, sequelize } from './config/db.js'
import bodyParser from 'body-parser'
import authRoutes from './routes/userRoute.js';
import contactRoutes from './routes/contactRoute.js';


const PORT = process.env.PORT || 3001
const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use('/api/auth', authRoutes);
app.use('/api/contacts', contactRoutes);

connectDB()

sequelize.sync().then(() => console.log('Conectado a la Base de Datos'))
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})