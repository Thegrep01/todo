const mongoose = require('mongoose')

const todo = new mongoose.Schema({
    title: {
        type: String
    },

    status: {
        type: Boolean
    }
})

module.exports = mongoose.model('Todo', todo)