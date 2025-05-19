import express from 'express'

import productosController from '../controllers/productos.controller.js'

const routerProductos = express.Router()


routerProductos.get('/', productosController.getAll)


routerProductos.get('/:id', productosController.getOne)


routerProductos.post('/', productosController.create)


routerProductos.put('/:id', productosController.update)


routerProductos.delete('/:id', productosController.remove)

export default routerProductos