import express from 'express'
import UserController from '../controller/user.js'
import Auth from '../utils/Auth.js'
const router = express.Router()

router.get('/all',Auth.superAdminGuard,UserController.getAllUsers)
router.post('/create',Auth.superAdminGuard,UserController.createUser)
router.post('/login',UserController.login)


export default router