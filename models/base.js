const fs = require('fs');
const { promisify } = require('util');

const writeFile = promisify(fs.writeFile);

module.exports = class BaseModel {
    constructor(filePath){
        this._filePath = filePath;
        this.entries = require(filePath);
        const lastEntry = this.entries[this.entries.length];
        this._lastEntryId = lastEntry ? lastEntry.id : 0;
    }

    insert(entry){
        const newEntry = { ...entry, id: this._lastEntryId + 1 };
        const newEntries = [...this.entries, newEntry];
        return writeFile(this._filePath, JSON.stringify(newEntries, null, 2))
            .then(() => { this.entries = newEntries ;}); 
    }
}