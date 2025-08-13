const express = require('express');
const dotenv =require('dotenv')
const connectDb = require('./config/db')
const todoRoutes =require('./routes/todo.routes')
const cors =require('cors')
dotenv.config()
connectDb()

const app =express()
app.use(express.json())
app.use(cors())

app.use('/todos',todoRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`server listening on port: http://localhost:${process.env.PORT}`)
})