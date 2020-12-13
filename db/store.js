const express = require("express");
const path = require("path");
const fs = require("fs");
const util = require("util");
//const uuidv1 = require("uuidv1");
const {promisify} = require('util');
const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

var readingFileFromAsync = readFileAsync("../db/db.json", "utf8");
class StoringMethodes {
    readFunction(){
    return readFileAsync("../db/db.json", "utf8");
    }
    writtingFuction(data){
        return writeFileAsync("../db/db.json", JSON.stringify(data));
    }
    gettingNotesFunction(){
        return writeFileAsync("../db/db.json", JSON.parse(data));
    }
    addingNotesFucntion(){
        return writeFileAsync("../db/db.json", JSON.push(data));
    }
    removingNotesFunction(){
        return deleteFileAsync("../db/db.json", JSON.delete(id));
    }
}

module.exports = new StoringMethodes();