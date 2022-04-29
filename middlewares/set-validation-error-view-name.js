module.exports = function setValidationErrorViewName(viewName){
    return function(req, res, next){
        res.locals.validationErrorviewName = viewName;
        next();
    }
}