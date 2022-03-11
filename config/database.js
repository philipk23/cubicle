const mongoose = require('mongoose');

module.exports = (dbConnectionString) => {
    return mongoose.connect(dbConnectionString)
        .then(data => {
            console.log('Connected to database successfully');
            return data;
        });
};