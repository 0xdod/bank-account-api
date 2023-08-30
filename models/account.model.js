class AccountModel {
    constructor(obj) {
        const { accountName, dateOfBirth, accountType, balance, accountNumber } = obj
        this.accountName = accountName
        this.dateOfBirth = dateOfBirth
        this.accountType = accountType
        this.balance = balance
        this.accountNumber = accountNumber
    }
}

exports.ACCOUNT_TYPE = {
    Savings: 'savings',
    Checking: 'checking',
    Current: 'current'
}

exports.AccountModel = AccountModel