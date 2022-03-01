global.__basedir = __dirname;

const env = process.env.NODE_ENV || 'development';

const config = require('./config/config')[env];
const app = require('express')();

require('./config/express')(app);
require('./config/routes')(app);

app.use(function(err, req, res, next){
    
})

app.listen(config.port, console.log(`Listening on port ${config.port}! Now it's up to you...`));