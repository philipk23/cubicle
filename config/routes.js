const cubeController = require('../controllers/cube');
const accessoryController = require('../controllers/accessory');

module.exports = (app) => {
    app.get('/', cubeController.getCubes); 
    app.get('/details/:id', cubeController.getCube);
    app.get('/create', cubeController.getCreateCube);
    app.post('/create', cubeController.postCreateCube);
    app.get('/about', function(req, res){
        res.render('about');
    });
    app.get('/create/accessory', accessoryController.getCreateAccessory);
    app.post('/create/accessory', accessoryController.postCreateAccessory);
    app.get('*', function(req, res){
        res.render('404',);
    });
};