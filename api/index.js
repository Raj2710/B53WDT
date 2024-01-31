import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import AppRoutes from './src/routes/index.js'

dotenv.config()
const PORT = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())

app.use(AppRoutes)

app.listen(PORT,()=>console.log(`App is listening ${PORT}`))