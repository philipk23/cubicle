const cubeModel = require('../models/cube');

module.exports = {
    getCubes: function(req, res) {
        const cubes = cubeModel.entries;
        res.render('index', { layout: false, cubes});
    }
}