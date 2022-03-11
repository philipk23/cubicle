const cubeModel = require('../models/cube');

module.exports = {
    getCubes(req, res, next) {
        const { search, from, to } = req.query;
        let query = {};
        if (search) { query.name = search };
        if (from) { query.from = +from };
        if (to) { query.to = +to };

        cubeModel.find(query).then((cubes) => {
            res.render('index', { cubes, search, from, to });
        }).catch(next);
    },

    getCube(req, res, next) {
        // const id = +req.params.id;
        // cubeModel.findById(id)
        //     .then(cube => {
        //         res.render('details', { layout: false, cube });
        //     })
        //     .catch(next);
    },

    postCreateCube(req, res, next){
        const { name, description, imageURL, difficultyLevel } = req.body;
        cubeModel.create({ name, description, imageURL, difficultyLevel: +difficultyLevel })
            .then(() => {
                res.redirect('/');
            })
            .catch(next);
    },

    getCreateCube(req, res){
        res.render('create');
    }
}