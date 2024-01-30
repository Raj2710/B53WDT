import express from 'express'
import UserController from '../controller/user.js'
import Auth from '../helper/auth.js'
const router = express.Router()

router.get('/',Auth.authenticate,Auth.adminGuard,UserController.getAllUsers)
router.get('/:id',Auth.authenticate,UserController.getUserById)

router.post('/createUser',UserController.createUser)
router.post('/login',UserController.login)

export default router