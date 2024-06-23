import { Router } from "express"
import { getAllContacts, getContact, updateContact, createContact, deleteContact } from "../controllers/contactController.js"
import middlewareAuth from "../middleware/middlewareAuth.js"

const router = Router()
router.use(middlewareAuth)


//Mostrar contactos
router.get('/contacts', getAllContacts)

//Mostrar un contacto
router.get('/:id', getContact)

//Crear nuevo contacto
router.post('/create/contact', createContact)

//Modificar datos del contacto
router.put('/:id', updateContact)

//Eliminar contacto
router.delete('/:id', deleteContact)

export default router