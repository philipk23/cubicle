const cubeController = require('../controllers/cube');
const accessoryController = require('../controllers/accessory');
const userController = require('../controllers/user');
const checkAuth = require('../middlewares/check-Auth');

module.exports = (app) => {
    app.get('/', cubeController.getCubes); 
    app.get('/login', checkAuth(false), userController.getLogin);
    app.get('/register', checkAuth(false), userController.getRegister);
    
    app.post('/login', checkAuth(false), userController.postLogin);
    app.post('/register', checkAuth(false), userController.postRegister);

    app.get('/logout', checkAuth(true), userController.getLogout);

    app.get('/details/:id', checkAuth(true), cubeController.getCube);

    app.get('/edit/:id', checkAuth(true), cubeController.getEditCube);
    app.post('/edit/:id', checkAuth(true), cubeController.postEditCube);

    app.get('/delete/:id', checkAuth(true), cubeController.getDeleteCube);
    app.post('/delete/:id', checkAuth(true), cubeController.postDeleteCube);

    app.get('/create', checkAuth(true), cubeController.getCreateCube);
    app.post('/create', checkAuth(true), cubeController.postCreateCube);

    app.get('/attach/accessory/:id', checkAuth(true), accessoryController.getAttachAccessory);
    app.post('/attach/accessory/:id', checkAuth(true), accessoryController.postAttachAccessory);
    
    app.get('/create/accessory', checkAuth(true), accessoryController.getCreateAccessory);
    app.post('/create/accessory', checkAuth(true), accessoryController.postCreateAccessory);
    
    app.get('/about', function(req, res){
        res.render('about');
    });
    app.get('*', function(req, res){
        res.render('404',);
    });
};