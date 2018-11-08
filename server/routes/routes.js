const express = require('express')

const routes = express.Router()

const ToDo = require('../models/models')

routes.route('/all').get((req, res, next) => {
    ToDo.find({}, (err, todos) => {
        res.json(todos)
    })
})

routes.route('/add').post((req, res) => {
    console.log(req.body);
    ToDo.create({
            title: req.body.title,
            status: false
        },
        (err, todo) => {
            if (err) {
                res.status(400).send('Create error!')
            }
            res.status(200).json(todo)
        })
})

routes.route('/update/:id').post((req, res, next) => {
    let id = req.params.id.trim()
    ToDo.findById(id, (err, todo) => {
        if (err) return handleError(err);
        todo.title = req.body.title
        todo.status = req.body.status
        todo.save((err, updatedtodo) => {
            if (err) return handleError(err);
            res.send(updatedtodo);
        });
    })

})

routes.route('/delete/:id').get((req, res, next) => {
    let id = req.params.id.trim()

    ToDo.findByIdAndRemove(id, (err, todo) => {
        if (err) {
            return next(new Error(err))
        }
        res.status(200).json('removed');
    })
})

module.exports = routes