const Sequelize = require("sequelize");

const sequelize = new Sequelize("similarProducts", "postgres", "", {
  dialect: "postgres"
});

sequelize
  .authenticate()
  .then(() => console.log("Connection established"))
  .catch(err => console.log("Unable to connect to database: ", err));

const Products = sequelize.define("Products", {
  productName: Sequelize.STRING,
  size: Sequelize.INTEGER,
  description: Sequelize.STRING,
  sku: Sequelize.INTEGER,
  stars: Sequelize.INTEGER,
  reviews: Sequelize.INTEGER,
  newBadge: Sequelize.INTEGER,
  loves: Sequelize.INTEGER,
  exclusive: Sequelize.INTEGER,
  online_only: Sequelize.INTEGER,
  limited_edition: Sequelize.INTEGER,
  free_shipping: Sequelize.INTEGER,
  price: Sequelize.INTEGER,
  image: Sequelize.STRING
});

const categories = sequelize.define("Categories", {
  categories: Sequelize.STRING
});
