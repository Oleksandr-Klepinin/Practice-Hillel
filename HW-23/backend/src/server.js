const express = require("express");
const cors = require("cors");
const {v4: uuidv4} = require("uuid");
const app = express();

const TodoModel = require('../src/mongo/todoModel')

app.use(cors())

app.use(express.json())

function server() {
    app.listen(5000, () => {
        console.log('Server running on localhost:5000...')
    })
    app.get('/todos', (req, res) => {
        TodoModel.find()
            .then(response => res.send(response))
    })
    app.get('/todos/:id', (req, res) => {
        TodoModel.findById(req.params.id)
            .then(response => res.send(response))
    })
    app.post('/todos', (req, res) => {
        new TodoModel(req.body).save()
            .then(response => res.send(response))
    })
    app.put('/todos/:id', (req, res) => {
        const newTodo = req.body;
        const id = req.params.id;
        TodoModel.updateOne({ _id: id }, newTodo)
            .then(() => {
                return TodoModel.findById(id)
            })
            .then(response => res.send(response))
    })
    app.delete('/todos/:id', (req, res) => {
        TodoModel.deleteOne({ _id: req.params.id })
            .then(response => res.send(response))
    })
}

module.exports = server;