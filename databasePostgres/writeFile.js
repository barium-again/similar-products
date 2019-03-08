const { ReadProductsTable } = require("./readProductsTable.js");
const fs = require("fs");
const path = require("path");

let productsCSV = new ReadProductsTable();

// data.pipe(process.stdout);
productsCSV.pipe(fs.createWriteStream(path.resolve(__dirname, "./products.csv")));
