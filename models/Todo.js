const mongoose = require('mongoose');
 const todoSchema = new mongoose.Schema({
     todo: {
         type: String,
         required: true,
         unique: true,
     }
 })
 const Todo = mongoose.model('Todo', todoSchema) || mongoose.model.Todo

 module.exports = Todo; 