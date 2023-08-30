class BaseHttpError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
    }
}

exports.BaseHttpError = BaseHttpError;