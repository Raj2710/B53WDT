import express from 'express'
import AdminRoutes from './admin.js'
import UserRoutes from './user.js'
import RequestRoutes from './request.js'
const router = express.Router()

router.get('/',(req,res)=>res.status(200).send(`<h1>Backend Implementation of Zen Desk</h1>`))

router.use('/admin',AdminRoutes)
router.use('/user',UserRoutes)
router.use('/request',RequestRoutes)

export default router