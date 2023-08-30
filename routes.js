const express = require('express')

const AccountController = require('./controllers/account.controller')
const AccountService = require('./services/account.service')
const { BankStore } = require('./database/in-memory')
const { validateCreateBankAccountRequest } = require('./middlewares/account.middleware')

exports.bankRouter = () => {
    const bankRouter = express.Router()
    const service = AccountService(BankStore)
    const controller = AccountController(service)

    bankRouter.post('/', validateCreateBankAccountRequest, controller.create.bind(controller))
    bankRouter.get('/', controller.getAll.bind(controller))
    bankRouter.get('/resolve', controller.resolve.bind(controller))

    return bankRouter
}