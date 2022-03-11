const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: String,
    description: String,
    imageURL: String,
    Cubes: [mongoose.Schema.Types.ObjectId]
});

module.exports = new mongoose.model('accessory', accessorySchema);