const express = require('express')
const app = express()
const port = 3000

//Mostrar contactos
app.get('/', (req, res) => {
    res.send('Hello World Everybody!')
})

//Crear nuevo contacto
app.post('/', (req, res) => {
    res.send('Got a POST request')
})

//Modificar datos del contacto
app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
})

//Eliminar contacto
app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})