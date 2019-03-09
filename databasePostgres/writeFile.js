const { ReadProductsTable } = require("./readProductsTable.js");
const { ReadCategoriesTable } = require("./readCategoriesTable.js");
const { ReadReviewsTable } = require("./readReviewsTable.js");
const fs = require("fs");
const path = require("path");

let productsCSV = new ReadProductsTable();
let categoriesCSV = new ReadCategoriesTable();
let reviewsCSV = new ReadReviewsTable();

// data.pipe(process.stdout);
// productsCSV.pipe(
//   fs.createWriteStream(path.resolve(__dirname, "./products.csv"))
// );
categoriesCSV.pipe(
  fs.createWriteStream(path.resolve(__dirname, "./categories.csv"))
);
// reviewsCSV.pipe(fs.createWriteStream(path.resolve(__dirname, "./reviews.csv")));
