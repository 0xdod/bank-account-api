class AccountController {
    constructor(accountService) {
        this.accountService = accountService
    }

    create(data) {
        const newAccount = this.accountService.create(data)
        return newAccount
    }

    resolve(accountNumber) {
        return this.accountService.resolve(accountNumber)
    }

    getAll() {
        return this.accountService.getAll()
    }
}

module.exports = (accountService) => new AccountController(accountService)