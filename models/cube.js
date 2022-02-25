const BaseModel = require('./base');
const path = require('path');

module.exports = class CubeModel extends BaseModel{
    constructor(){
        const filePath = path.resolve('../config/database.json');
        super(filePath);
    }

    insert(name, description, imageURL, difficultyLevel){
        return super.insert({ name, description, imageURL, difficultyLevel });
    }

    findById(id){
        const entry = this.entries.find(entry => entry.id === id);
        return Promise.resolve(entry);
    }
}