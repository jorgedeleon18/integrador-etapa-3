import express from 'express'
import 'dotenv/config'
import path from 'node:path'
import cors from 'cors'
import connection from './utils/connection.js'
import routerProductos from './routers/productos.router.js'
import routerUploads from './routers/uploads.router.js'

const app = express()
const PORT = process.env.PORT
//const URI_DB=process.env.URI_LOCAL
const URI_DB=process.env.URI_REMOTA
const URL_FRONT = process.env.URL_FRONTEND_CORS

const corsConfig = {
    origin: URL_FRONT
}

app.use(express.json())
app.use(express.static(path.join('public')))
app.use(cors(corsConfig))

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