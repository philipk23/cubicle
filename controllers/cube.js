const cubeModel = require('../models/cube');

module.exports = {
    getCubes(req, res, next) {
        cubeModel.getAll()
            .then(cubes => {
                res.render('index', { layout: false, cubes});
            })
            .catch(next)
    },

    getCube(req, res, next) {
        const id = +req.params.id;
        cubeModel.findById(id)
            .then(cube => {
                res.render('details', { layout: false, cube });
            })
            .catch(next);
    },

    postCreateCube(req, res, next){
        const { name, description, imageUrl, difficultyLevel } = req.body;
        cubeModel.insert(name, description, imageUrl, +difficultyLevel)
            .then(() => {
                res.redirect('/')
            })
            .catch(next);
    },

    getCreateCube(req, res){
        res.render('create', { layout: false });
    }
}