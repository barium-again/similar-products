const { ReadDocuments } = require("./readFile.js");
const fs = require("fs");

let data = new ReadDocuments();

// data.pipe(process.stdout);
data.pipe(fs.createWriteStream("./data.json"));
