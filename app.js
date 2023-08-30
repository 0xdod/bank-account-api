const express = require('express')
const bodyParser = require('body-parser')

const { bankRouter } = require('./routes')

const app = express()
app.use(bodyParser.json())
app.use('/v1/banks', bankRouter())

module.exports = app