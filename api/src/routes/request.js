import express from 'express'
import Auth from '../utils/Auth.js'
import RequestController from '../controller/request.js'

const router = express.Router()
router.get('/count',Auth.authenticate,RequestController.getRequestCount)
router.get('/',Auth.authenticate,RequestController.getRequestByType)
router.get('/:id',RequestController.getRequestById)
router.post('/',RequestController.createRequest)
router.put('/assign',Auth.authenticate,RequestController.assign)
router.put('/resolve',Auth.authenticate,RequestController.resolve)



export default router