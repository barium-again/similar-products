const path = require("path");
const parser = require("body-parser");
const { seedDb } = require("../databasePostgres/index.js");
const express = require("express");

const { getProductByCat, verifyLoader } = require("./controller.js");

const app = express();

module.exports.startApp = async () => {
  await seedDb();
  app.use(parser.json());
  app.use(parser.urlencoded({ extended: true }));
  app.use(express.static(path.resolve(__dirname, "../public")));
  app.get("/category", getProductByCat);
  app.get("/loaderio-4ebcebe21244672c214f38f96d50f538", verifyLoader);
};

module.exports.app = app;
