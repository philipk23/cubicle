const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

module.exports = (app) => {
    app.engine('.hbs', handlebars({extname: '.hbs'}));
    app.set('view engine', '.hbs');

    app.set(express.urlencoded({ extended: true }));

    const staticFilePath = path.resolve('./static');

    app.use(express.static(staticFilePath));
};