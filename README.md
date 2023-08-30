# Bank Account Management API - Technical Test

A simple RESTful API using Node.js and Express for a basic Bank Account Management service with three endpoints: one to create a bank account, one to resolve a bank account, and one to fetch all bank accounts.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
  - [Create a Bank Account](#create-a-bank-account)
  - [Resolve a Bank Account](#resolve-a-bank-account)
  - [Fetch All Bank Accounts](#fetch-all-bank-accounts)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

Follow the instructions below to get this project up and running on your local machine.

### Prerequisites

Make sure you have the following tools installed:

- [Node.js](https://nodejs.org/) - The runtime environment for running JavaScript on the server.
- [npm](https://www.npmjs.com/) - The Node.js package manager.

### Installation

1. Clone this repository to your local machine using:

   ```shell
   git clone https://github.com/0xdod/bank-account-api.git
   ```

2. Navigate to the project directory:

   ```shell
   cd bank-account-api
   ```

3. Install project dependencies:

   ```shell
   npm install
   ```

4. Start the server:

   ```shell
   npm start
   ```

Your Bank Account Management API should now be running at `http://localhost:3000`.

## Project Structure

The project structure is organized as follows:

```
bank-account-api/
│
├── controllers/
│   ├── accountController.js     # Controller for handling account-related operations
│
├── models/
│   ├── Account.js               # Account data model
│
├── routes/
│   ├── accountRoutes.js         # API routes for account operations
│
├── app.js                       # Express application setup
│
├── config.js                    # Configuration file for environment variables
│
└── server.js                    # Entry point for the application
```

## Usage

### Create a Bank Account

To create a new bank account, make a POST request to the following endpoint:

```
POST /api/accounts
```

You should include a JSON payload with the account details, such as:

```json
{
  "accountNumber": "1234567890",
  "accountName": "John Doe",
  "balance": 1000.0
}
```

### Resolve a Bank Account

To resolve (get details of) a bank account, make a GET request to the following endpoint, replacing `<accountNumber>` with the actual account number:

```
GET /api/accounts/<accountNumber>
```

### Fetch All Bank Accounts

To fetch a list of all bank accounts, make a GET request to the following endpoint:

```
GET /api/accounts
```

## Testing

You can run tests for this project using the following command:

```shell
npm test
```

Tests are located in the `tests` directory and use [Mocha](https://mochajs.org/) as the test framework and [Chai](https://www.chaijs.com/) for assertions.

## Contributing

If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository on GitHub.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure that the tests pass.
4. Create a pull request with a clear description of your changes.

We welcome contributions from the community!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Note:** This README provides a basic structure for your project's documentation. You should update it with more specific details as you build out your Bank Account Management API. Good luck with your technical test!
