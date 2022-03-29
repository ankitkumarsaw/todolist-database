const express = require('express');
const { addTodo, getAllTodoList, updateTodo, deleteTodo} = require('./db')
const app = express();
const PORT = 4000;
app.use(express.json());

app.get('/', (req, res) => {
    res.send("node mongo api running")
})

app.get('/todolist', async (req, res) => {
    try{
        const todos = await getAllTodoList();
        res.send(todos);
    } catch(err){
        res.send(err.message);
    }
})
app.post('/addtodo', async (req, res) => {
    try{
        const addtodo = await addTodo(req.body); 
        res.send(addtodo);
    } catch(err){
        res.send(err.message);
    }
})
app.put('/updatetodo', async (req, res) => {
    try {
        const updatetodo = await updateTodo(req.body);
        res.send(updatetodo);
    } catch(err){
        res.send(err.message);
    }
})
app.delete('/deletetodo/:id', async (req, res) =>{
    try{
        const deletetodo = await deleteTodo(req.params.id);
        res.send(deletetodo);
    } catch(err){
        res.send(err.message);
    }
})
 app.listen(PORT, ()=>{
     console.log(`listening on port${PORT}`);
 })