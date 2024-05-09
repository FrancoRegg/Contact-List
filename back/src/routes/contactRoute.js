
//Mostrar contactos
app.get('/', (req, res) => {
    res.send('Hello World Everybody!')
})

//Crear nuevo contacto
app.post('/', (req, res) => {
    res.send('Got a POST request')
})

//Modificar datos del contacto
app.put('/contact', (req, res) => {
    res.send('Got a PUT request at /user')
})

//Eliminar contacto
app.delete('/contact', (req, res) => {
    res.send('Got a DELETE request at /user')
})