import express from 'express'
import UserRoutes from './user.js'
const router = express.Router()

router.get('/',(req,res)=>{
    res.send(`<h1>Welcome to Authentication and Authorization</h1>`)
})

router.use('/user',UserRoutes)

export default router