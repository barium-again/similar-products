const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/similarproducts", {
  useNewUrlParser: true
});
const Schema = mongoose.Schema;

const similarSchema = new Schema({
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

const Products = mongoose.model("Products", similarSchema);
