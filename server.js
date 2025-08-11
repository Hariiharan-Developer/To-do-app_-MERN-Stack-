const express = require('express');
const app =express()
app.use(express.json())
// dot.env integration:
const dotenv =require('dotenv')

dotenv.config()

//Sample In-memory storage for todo items:

let todos =[]

//Create New Todo Item:
app.post('/todos',(req,res)=>{
    const {title, description} =req.body;
    const newTodo ={
        id:todos.length+1,
        title,
        description

    }
    todos.push(newTodo)
    console.log(todos)
    res.status(201).json(newTodo)

})

//Get all Items:
app.get('/todos',(req,res)=>{
    res.json(todos)
})


app.listen(process.env.PORT,()=>{
    console.log(`server listening on port: http://localhost:${process.env.PORT}`)
})