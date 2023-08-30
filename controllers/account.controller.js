class AccountController {
    constructor(accountService) {
        this.accountService = accountService
    }

    create(req, res, next) {
        const newAccount = this.accountService.create(req.body)
        res.json(newAccount)
    }

    resolve(req, res, next) {
        try {
            const { accountNumber } = req.query
            const account = this.accountService.resolve(accountNumber)
            res.json(account)
        } catch (e) {
            next(e)
        }
    }

    getAll(req, res, next) {
        const accounts = this.accountService.getAll()
        res.json(accounts)
    }
}

module.exports = (accountService) => new AccountController(accountService)