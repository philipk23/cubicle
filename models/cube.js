const BaseModel = require('./base');
const path = require('path');

class CubeModel extends BaseModel{
    constructor(){
        const filePath = path.join(global.__basedir, '/config/database.json');
        super(filePath);
    }

    insert(name, description, imageURL, difficultyLevel){
        return super.insert({ name, description, imageURL, difficultyLevel });
    }

    findById(id){
        const entry = this.entries.find(entry => entry.id === id);
        return Promise.resolve(entry);
    }

    getAll(data){
        if (!data) { return super.getAll()}
        const { name, from, to } = data;
        return super.queryBy(function(entry) {
            return (name ? entry.name.includes(name) : true) &&
                (from ? entry.difficultyLevel >= from : true) &&
                (to ? entry.difficultyLevel <= to : true);
        })
    }
};

module.exports = new CubeModel();