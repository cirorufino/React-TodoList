const mongoose = require ('mongoose');

const todoSchema = new mongoose.Schema({
    todo: {
        type: String
    }
}, {
    collection: 'todo-list'
});

const model = mongoose.model('todoSchema', todoSchema);
module.exports = model;