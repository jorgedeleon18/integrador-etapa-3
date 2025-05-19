import express from 'express'
import 'dotenv/config'
import connection from './utils/connection.js'
import routerProductos from './routers/productos.router.js'
import routerUploads from './routers/uploads.router.js'

const app = express()
const PORT = 8080
const URI_DB=process.env.URI_LOCAL



app.use(express.json())

app.use('/api/v1/productos', routerProductos)
app.use('/api/v1/uploads', routerUploads)

app.get('/', (req, res) => {
    res.send('Hello Word!')
})


app.listen(PORT, (err) => {
    if (err) throw new Error('No se pudo levantar el servidor')
        console.log(`Servidor funcionando en: http://localhost:${PORT}`)
    connection(URI_DB)
    })