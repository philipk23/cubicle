const accessoryModel = require('../models/accessory');

module.exports = {
    postCreateAccessory(req, res, next){
        const { name, description, imageURL } = req.body;
        accessoryModel.create({ name, description, imageURL })
            .then(() => {
                res.redirect('/');
            })
            .catch(next);
    },

    getCreateAccessory(_, res){
        res.render('create-accessory');
    },

    postAttachAccessory(req, res, next){

    }
}