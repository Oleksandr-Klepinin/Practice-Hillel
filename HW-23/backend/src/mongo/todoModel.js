const { Schema, model } = require('mongoose');

const TodosSchema = Schema({
    text: {
        type: String,
        required: true,
    },
    checked: {
        type: Boolean,
        default: false,
    }
}, { versionKey: false })

module.exports = model('Todos', TodosSchema);