import express from 'express'
const routerUpload = express.Router()
import controller from '../controllers/uploads.controller.js'
import uploadsMiddleware from '../middlewares/uploads.middleware.js'


routerUpload.post('/', uploadsMiddleware.single('imagen'), controller.uploadImagen)

export default routerUpload