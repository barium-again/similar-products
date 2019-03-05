const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const connection = mongoose.createConnection(
  "mongodb://localhost/similarproducts",
  {
    useNewUrlParser: true
  }
);

autoIncrement.initialize(connection);

const Schema = mongoose.Schema;

const similarSchema = new Schema({
  productid: Number,
  productname: String,
  size: String,
  categories: String,
  description: String,
  sku: Number,
  stars: Number,
  reviews: Number,
  newbadge: Number,
  loves: Number,
  exclusive: String,
  online_only: String,
  limited_edition: String,
  free_shipping: String,
  price: String,
  image: String
});

similarSchema.index({ productid: 1 });

const Products = connection.model("Products", similarSchema);

// mongoimport --db similarproducts --collection Products <data.json --jsonArray
