global.__basedir = __dirname;

const app = require('express')();
const config = require('./config/config');
const globalErrorHandler = require('./global-error-handler');

require('./config/express')(app);
require('./config/routes')(app);

const dbConnectionPromise = require('./config/database')();

dbConnectionPromise.then(() => {
    app.use(globalErrorHandler);
    app.listen(config.port, console.log(`Listening on port ${config.port}! Now it's up to you...`));
});