const express = require('express')

const AccountController = require('./controllers/account.controller')
const AccountService = require('./services/account.service')
const { BankStore } = require('./database/in-memory')

exports.bankRouter = () => {
    const bankRouter = express.Router()
    const service = AccountService(BankStore)
    const controller = AccountController(service)

    bankRouter.post('/', (req, res) => {
        // TODO validation req.body
        const account = controller.create(req.body)
        res.json(account)
    })

    bankRouter.get('/', (req, res) => {
        const accounts = controller.getAll()
        res.json(accounts)
    })

    bankRouter.get('/resolve', (req, res) => {
        const { accountNumber } = req.query
        try {
            const account = controller.resolve(accountNumber)
            res.json(account)
        } catch (e) {
            res.json({ error: e.message })
        }
    })

    return bankRouter
}