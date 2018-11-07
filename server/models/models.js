const mangoose = require('mangoose')

const todo = new mangoose.Schema({
    title: {
        type: String
    },

    status: {
        type: Boolean
    }
})

module.exports = mangoose.model('Todo', todo)