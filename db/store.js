const express = require("express");
const fs = require("fs");
const util = require("util");
const { v1: uuidv1 } = require('uuid');
const { promisify } = require("util");
const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

//var readingFileFromAsync = readFileAsync("db/db.json", "utf8");
//var writeingFileFromAsync = writeFileAsync("db/db.json", "utf8");

class StoringMethodes {
  readFunction() {
    return readFileAsync("db/db.json", { encoding: "utf8" }).catch((err) => {
      console.log("ERROR:", err);
    });
  }
  parseNotesFuction(){
    return this.readFunction().then((dataNotes) => {
      return JSON.parse(dataNotes);
    })
  }
  writingFuction(dataNote) {
    return writeFileAsync(
      "db/db.json",
      { encoding: "utf8" },
      JSON.stringify(dataNote)
    ).catch((err) => {
      console.log("ERROR:", err);
    });
  }
  // gettingNotesFunction() {
  //   return readFileAsync("db/db.json", JSON.parse(dataNote))
  //   .catch((err) => {
  //     console.log('ERROR:', err);
  // });
  //}
  addingNotesFucntion(dataNote) {
    return writeFileAsync("db/db.json",JSON.stringify(dataNote))
   .catch((err) => {
     console.log('ERROR:', err);
  });
  }
  removingNotesFunction(id) {
    return FileAsync("db/db.json", JSON.delete(id))
   .catch((err) => {
     console.log('ERROR:', err);
  });
  }
}
module.exports = new StoringMethodes();
