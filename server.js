const express = require('express');
const app =express()
app.use(express.json())

//Sample In-memory storage for todo items:

let todos =[]

//Create New Todo Item
app.post('/todos',(req,res)=>{
    const {title, description} =req.body;
    const newTodo ={
        id:todos.length+1,
        title,
        description

    }
    todos.push(newTodo)
    console.log(newTodo)
    res.status(201).json(newTodo)

})
const port =3000;
app.listen(port,()=>{
    console.log("server listening on port: http://localhost:3000")
})