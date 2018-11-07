const express = require('express')

const mongoose = require('mongoose')

const morgan = require('morgan')

const parser = require('body-parser')

const cors = require('cors')

const config = require('./config/config')

const routes = require('./routes/routes')

const app = express()

app.use(cors())

mongoose.connect(config.DB)

app.use(morgan('dev'))

app.use(parser.json())
app.use(parser.urlencoded({
    extended: false
}));

const port = config.port || 5000

app.use('/home', routes)

app.listen(port, () => {
    console.log('Listening on http://localhost:5000');
});