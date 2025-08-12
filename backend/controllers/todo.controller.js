const todoModel =require('../model/todo.model')


//Create New Todo Item:
const createTodo = async(req,res)=>{
    try {
        const {title, description} =req.body;
        const newTodo = new todoModel({title,description})
        newTodo.save()
        res.status(201).json(newTodo)
        
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }

}

//Get all Items:
const getTodo =async(req,res)=>{
    try{
        const todos = await todoModel.find()
        res.json(todos)
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:error.message})
    }
}


//Update to-do:
const updateTodo =async(req,res)=>{

    try {
        
        const {title,description} =req.body
        const id = req.params.id
        const updatedTodo =await todoModel.findByIdAndUpdate(
            id,
            {title,description},
            {new:true}
        )
        if(!updatedTodo){
            return res.status(404).json({msg:'To-do Not Found'})
        }
        res.json(updatedTodo)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message})
    }
    

}

//Delete todo item:
const deleteTodo = async(req,res)=>{
    try{

        const id = req.params.id;
        await todoModel.findByIdAndDelete(id)
        res.status(204).end()
    }
    catch(error){
      console.error('message:',error.message)
    }

}

module.exports= {createTodo,deleteTodo,updateTodo,getTodo}