const { Router } = require('express');
const express = require('express');
const router = express.Router();

const Todo = require('../model/todo');

router.get('/data', async (req,res) => {
    const todos = await Todo.find();
    res.json(todos);
});

module.exports = router;

router.post('/add', (req,res) => {
    const todo = new Todo({
        todo: req.body.todo
    });

    todo.save();
    res.json(todo);
})

// router.put('/complete/:id', async(req, res) => {
//     const todo = await Todo.findById(req.params.id);

// })

router.delete('/delete/:id', async (req, res) => {
    const result = await Todo.findByIdAndDelete(req.params.id);

    res.json(result);
})