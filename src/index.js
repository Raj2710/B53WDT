// const express = require('express')//commonjs syntax
import express from 'express'
import AppRoutes from './routes/index.js'
const app = express()
const PORT = 8000

app.use('/',AppRoutes)

app.listen(PORT,()=>console.log(`App is listening port ${PORT}`))