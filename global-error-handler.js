module.exports = function globalErrorHandler(err, req, res, next){
    if(res.locals.validationErrorViewName){
        res.render(res.locals.validationErrorViewName, { errors: err });
        return;
    }
    if(err.message === 'BADREQUEST'){
        res.status = 400;
        return;
    };
    if(err.message === 'UNAUTHORIZED'){
        res.redirect('/');
        return;
    }
};