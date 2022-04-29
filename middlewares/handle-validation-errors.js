const { validationResult } = require('express-validator');

function handleValidationErrors(req, res, next){
    const validationResult = validationResult(req);
    if(validationResult.isEmpty()){ next(validationResult.errors); return; }
    next();
};

module.exports = {
    handleValidationErrors,
}