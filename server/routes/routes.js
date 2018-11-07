const express = require('express')

const routes = express.Router()

const ToDo = require('../models/models')

routes.route('/').get((req, res, next) => {
    ToDo.find((err, todos => {
        if (err) {
            return next(new Error(err))
        }
        res.json(todos)
    }))
})

routes.route('/').post((req, res) => {
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

routes.route('/:id').post((req, res, next) => {
    let id = req.body._id

    ToDo.findByID(id, (err, todo) => {
        if (err) {
            return next(new Error(err))
        }
        todo.title = req.body.title
        todo.status = req.body.status

        todo.save({
            function (err, todo) {
                if (err) {
                    res.status(400).send('Update error!')
                }
                res.status(200).json(todo)
            }
        })
    })
})

routes.route('/:id').get((req, res, next) => {
    let id = req.body._id

    ToDo.finByIdAndRemove(id, (err, todo) => {
        if (err) {
            return next(new Error(err))
        }
        res.status(200).json('removed');
    })
})

module.exports = routes