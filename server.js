import express from 'express'
import 'dotenv/config'
import connection from './utils/connection.js'

const app = express()
const PORT = 8080
const URI_DB=process.env.URI_LOCAL



app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello Word!')
})

app.get('/api/v1/productos', (req, res) => {
    res.send('GET ALL')
})

app.get('/api/v1/productos/:id', (req, res) => {
    const id = req.params.id
    res.send('GET ONE')
})

app.post('/api/v1/productos', (req, res) => {
    const productoACrear = req.body
    res.send('CREATED Producto')
})

app.put('/api/v1/productos/:id', (req, res) => {
    const id = req.params.id
    const productoAEditar  = req.body
    res.send('UPDATED Producto')
})

app.delete('/api/v1/productos/:id', (req, res) => {
    const id = req.params.id
    res.send('DELETED Producto')
})




app.listen(PORT, (err) => {
    if (err) throw new Error('No se pudo levantar el servidor')
        console.log(`Servidor funcionando en: http://localhost:${PORT}`)
    connection(URI_DB)
    })