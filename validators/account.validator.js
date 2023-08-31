const Joi = require('joi');


exports.createAccountSchema = Joi.object({
    accountName: Joi.string().required(),
    dateOfBirth: Joi.string().custom(isDateValid).required(),
    accountType: Joi.string().valid('savings', 'checking').required(),
    balance: Joi.number().min(0).required(),
});

function isDateValid(dateString, helpers) {
    // Create a Date object from the input string
    const date = new Date(dateString);

    // Check if the Date object is valid and not equal to "Invalid Date"
    // Also, check if the input string is in the "yyyy-mm-dd" format
    if (!isNaN(date) && dateString.match(/^\d{4}-\d{2}-\d{2}$/)) {
        return dateString; // Validation succeeded, return the validated value
    }
    return helpers.message('must be a valid date in the format yyyy-mm-dd');
}