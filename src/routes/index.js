import express from 'express'
import IndexController from '../controller/index.js'
import UserRoutes from './user.js'
const router = express.Router()
//for home page
router.get('/',IndexController.homePage)

//other routes
router.use('/user',UserRoutes)


export default router