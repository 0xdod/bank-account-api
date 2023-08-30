const { BaseHttpError } = require('../errors/base-http.error');
const { createAccountSchema } = require('../validators/account.validator');

exports.validateCreateBankAccountRequest = (req, res, next) => {
    const { error } = createAccountSchema.validate(req.body);

    if (error) {
        // Return a 400 Bad Request response with the validation error
        res.status(400).json({ error: error.message });
        return;
    }

    // If validation passes, continue to the next middleware/route handler
    next();
};
