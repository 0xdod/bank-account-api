const { AccountModel } = require("../models/account.model")
const { BaseHttpError } = require("../errors/base-http.error")

class AccountService {
    constructor(database) {
        this.database = database
    }

    create(data) {
        const model = new AccountModel(data)
        let accountNumber = this.generateBankAccountNumber()
        while (this.database.find((account) => account.accountNumber === accountNumber)) {
            accountNumber = this.generateBankAccountNumber()
        }
        model.accountNumber = accountNumber
        this.database.push(model)
        return model
    }

    resolve(accountNumber) {
        const account = this.database.find((account) => account.accountNumber === accountNumber)
        if (!account) throw new BaseHttpError(404, 'Account not found')
        return account
    }

    getAll() {
        return this.database
    }

    generateBankAccountNumber() {
        const min = 1000000000; // Smallest 10-digit number (10 zeros)
        const max = 9999999999; // Largest 10-digit number (9 nines)

        // Generate a random number within the specified range
        const accountNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        return accountNumber.toString(); // Convert to a string to preserve leading zeros
    }

}

module.exports = (database) => new AccountService(database)