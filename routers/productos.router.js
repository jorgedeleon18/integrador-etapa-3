import express from 'express'
const routerProductos = express.Router()

routerProductos.get('/api/v1/productos', (req, res) => {
    res.send('GET ALL')
})

routerProductos.get('/api/v1/productos/:id', (req, res) => {
    const id = req.params.id
    res.send('GET ONE')
})

routerProductos.post('/api/v1/productos', (req, res) => {
    const productoACrear = req.body
    res.send('CREATED Producto')
})

routerProductos.put('/api/v1/productos/:id', (req, res) => {
    const id = req.params.id
    const productoAEditar  = req.body
    res.send('UPDATED Producto')
})

routerProductos.delete('/api/v1/productos/:id', (req, res) => {
    const id = req.params.id
    res.send('DELETED Producto')
})

export default routerProductos