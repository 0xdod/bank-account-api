# Bank Account Management API - Technical Test

A simple RESTful API using Node.js and Express for a basic Bank Account Management service with three endpoints: one to create a bank account, one to resolve a bank account, and one to fetch all bank accounts.

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

4. Copy and edit the env variables:

   ```shell
   cp .env.sample .env
   ```

5. Start the server:

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
│   ├── account.controller.js     # Controller for handling account-related http operations
├── database/
│   ├── in-memory.js             # In memory implementation of data storage
│
├── errors/
│   ├── base-http.error.js       # Error classes
│
├── middlewares/
│   ├── account.middleware.js    # Middlewares
│
├── models/
│   ├── account.model.js         # Account data model
│
├── services/
│   ├── account.service.js       # Business logic implementation for account management
├── validators/
│   ├── account.validator.js      # Account request/payload validation
│
│
├── app.js                       # Express application setup
│
├── config.js                    # Configuration file for environment variables
│
├── routes.js                    # Register routes
│
└── main.js                    # Entry point for the application
```

## Usage

### Create a Bank Account

To create a new bank account, make a POST request to the following endpoint:

```
POST /v1/accounts
```

You should include a JSON payload with the account details, such as:

```json
{
  "accountName": "grace",
  "dateOfBirth": "2007-09-23",
  "accountType": "savings",
  "balance": 100.2
}
```

### Resolve a Bank Account

To resolve (get details of) a bank account, make a GET request to the following endpoint, replacing `<accountNumber>` with the actual account number:

```
GET /v1/accounts/resolve?accountNumber=<accountNumber>
```

### Fetch All Bank Accounts

To fetch a list of all bank accounts, make a GET request to the following endpoint:

```
GET /v1/accounts
```
