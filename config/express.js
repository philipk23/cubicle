const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

module.exports = (app) => {
    app.engine('.hbs', handlebars({extname: '.hbs'}));
    app.set('view engine', '.hbs');
    //When using middlewares - app.use
    app.use(express.urlencoded({ extended: true }));

    const staticFilePath = path.join(global.__basedir, 'static');

    app.use(express.static(staticFilePath));

    app.use(function(err, req, res, next){
        if(err.message === 'BAD_REQUEST'){
            res.status = 400;
            return;
        };
    });
};