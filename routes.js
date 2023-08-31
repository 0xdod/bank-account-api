const express = require('express')

const AccountController = require('./controllers/account.controller')
const AccountService = require('./services/account.service')
const { BankStore } = require('./database/in-memory')
const { validateCreateBankAccountRequest } = require('./middlewares/account.middleware')

exports.accountsRouter = () => {
    const accountsRouter = express.Router()
    const service = AccountService(BankStore)
    const controller = AccountController(service)

    accountsRouter.post('/', validateCreateBankAccountRequest, controller.create.bind(controller))
    accountsRouter.get('/', controller.getAll.bind(controller))
    accountsRouter.get('/resolve', controller.resolve.bind(controller))

    return accountsRouter
}