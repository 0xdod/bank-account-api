const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan');


const { accountsRouter } = require('./routes')
const { BaseHttpError } = require('./errors/base-http.error')

const app = express()
app.use(bodyParser.json())
app.use(morgan('dev'));

app.use('/v1/accounts', accountsRouter())

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    if (err instanceof BaseHttpError) {
        res.status(err.statusCode).json({ error: err.message });
        return;
    }
    res.status(500).json({ error: 'Something went wrong!' });
});

module.exports = app