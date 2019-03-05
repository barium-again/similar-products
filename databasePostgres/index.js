const { Pool, Client } = require("pg");
const path = require("path");

const pool = new Pool({
  user: "badwolf",
  database: "similarproducts",
  password: ""
});

pool.connect().then(client => {
  console.log("Pool connection established");
  return client
    .query(
      `copy products (productname, size, categories,description, sku, stars,reviews, newbadge, loves, exclusive, online_only, limited_edition, free_shipping, price, image) from '${path.resolve(
        __dirname,
        "./data.csv"
      )}' delimiters ',' csv;`
    )
    .then(() => console.log("data is seated!"))
    .catch(err => console.log(err));
});
