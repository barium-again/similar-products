const Sequelize = require("sequelize");

const sequelize = new Sequelize("similarproducts", "badwolf", "", {
  dialect: "postgres"
});

sequelize
  .authenticate()
  .then(() => console.log("Connection established"))
  .catch(err => console.log("Unable to connect to database: ", err));

const Products = sequelize.define(
  "products",
  {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    productname: Sequelize.STRING,
    size: Sequelize.ARRAY(Sequelize.REAL),
    categories: Sequelize.STRING,
    description: Sequelize.STRING,
    sku: Sequelize.REAL,
    stars: Sequelize.REAL,
    reviews: Sequelize.REAL,
    newbadge: Sequelize.STRING,
    loves: Sequelize.REAL,
    exclusive: Sequelize.STRING,
    online_only: Sequelize.STRING,
    limited_edition: Sequelize.STRING,
    free_shipping: Sequelize.STRING,
    price: Sequelize.STRING,
    image: Sequelize.STRING
  },
  { timestamps: false }
);

sequelize
  .sync({ force: true })
  .then(() => console.log("table created!"))
  .catch(err => console.log(err));

// \copy products from './databasePostgres/data.csv' (format csv, null '\N');

// (productName, size, categories, description, sku, stars, reviews, newBadge, loves, exclusive, online_only, limited_edition, free_shipping, price, image)
