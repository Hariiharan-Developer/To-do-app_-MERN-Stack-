const mongoose = require('mongoose')

//Creating Schema:


const todoSchema = new mongoose.Schema({
  title: 
  {
    type: String,
    required: true,
  },
  description: String,
});

//Creating Model:
const todoModel =mongoose.model('Todo',todoSchema)

module.exports = todoModel