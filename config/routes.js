const cubeController = require('../controllers/cube')

module.exports = (app) => {
    app.get('/', cubeController.getCubes); 
};