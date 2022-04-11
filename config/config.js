const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 3000,
        dbConnectionString: 'mongodb://0.0.0.0:27017/softuni-test',
        authCookieName: 'auth_cookie',
        authHeaderName: 'auth',
        jwtSecret: 'secret',
        saltRounds: 10
    },
    production: {}
};

module.exports = config[env];