import express from 'express'
import RequestController from '../controller/request.js'

const router = express.Router()

router.get('/:id',RequestController.getRequestById)
router.post('/',RequestController.createRequest)



export default router