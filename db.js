const mongoose = require('mongoose')
const Todo = require('./models/Todo')

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb://localhost:27017/test',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('mMongoDB connection successful');
    } catch(err){
        console.log('mMongoDB connection failed: ', err.message)
    }
} 
connectDB();

 const addTodo = async (todo) => {
     try{
         const addtodo = new Todo(todo);
         await addtodo.save();
         return 'Todo aadded successfuly';
     } catch(err){
         return err.message; 
     }
 }
 const getAllTodoList = async () =>{
     try{
         const allTodoList = await Todo.find();
         return allTodoList;
     } catch(err){
         return err.message;     
    }
 }
 const updateTodo = async (data) => {
     try{
         let updatetodo = await Todo.findOne({_id: data.id});
         updatetodo.todo = data.todo || updatetodo.todo;
         await updatetodo.save();
         return 'Todo updated successfully'
     } catch(err){
         return err.message;
     }
 }
 const deleteTodo = async (id) => {
     try{
         await Todo.deleteOne({id});
         return 'Todo deleted successfully'
     } catch(err){
         return err.message;
     }

 }
 module.exports = {
     addTodo,
     deleteTodo,
     updateTodo,
     getAllTodoList
 };  