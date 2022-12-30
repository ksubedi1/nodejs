const express = require('express');
const app = express();

let todos = [];

app.use(express.json());

//to get the list of all todo items
app.get('/todos', (req, res) => {
    res.send(todos);
});

//Add a new todo
app.post('/todo', (req, res) => {
    todos.push(req.body);
    res.send(todos);
});

// delete the todo list
app.delete('/todos', (req, res) => {
    todos = [];
    res.send(todos);
});

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000')
})
