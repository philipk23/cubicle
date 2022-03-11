module.exports = {
    development: {
        port: process.env.PORT || 3000,
        dbConnectionString: 'mongodb://0.0.0.0:27017/softuni-test',
    },
    production: {}
};