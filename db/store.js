const express = require("express");
const fs = require("fs");
const util = require("util");
const uuidv1 = require("uuid/v1");
const { promisify } = require("util");
const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

var readingFileFromAsync = readFileAsync("db/db.json", "utf8");
var writeingFileFromAsync = writeFileAsync("db/db.json", "utf8");

class StoringMethodes {
  readFunction() {
    return readFileAsync("db/db.json", "utf8");
  }
  writtingFuction(dataNote) {
    return writeFileAsync("db/db.json", JSON.stringify(dataNote));
  }
  gettingNotesFunction() {
    return uuidv1.FileAsync("db/db.json", JSON.parse(dataNote));
  }
  addingNotesFucntion(dataNote) {
    return fs.writeFile("db/db.json", JSON.push(dataNote));
  }
  removingNotesFunction(id) {
    return util.FileAsync("db/db.json", JSON.delete(id));
  }
}
module.exports = new StoringMethodes();
