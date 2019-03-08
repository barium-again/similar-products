const { Pool } = require("pg");
const path = require("path");

const pool = new Pool({
  user: "badwolf",
  database: "similarproducts",
  password: ""
});

let text =
  "create table if not exists categories( id bigserial not null primary key, categories varchar (30)); create table if not exists reviews ( id bigserial not null primary key, count integer, star_avg integer); create table if not exists products( id bigserial primary key, product_name varchar (225) not null, size real[], descriptions varchar(350), sku real, dateAdded varchar(250), loves real, exclusive varchar (5), online_only varchar (5), limited_edition varchar (5), free_shipping varchar (5), price varchar(7), product_image varchar (350));";

pool.connect().then(() => {
  console.log("Pool connection established");
  pool.query(text).then(() => {
    console.log("Tables are created!");
    pool.query("select * from products where id=1").then(({ rows }) => {
      if (rows.length < 1) {
        console.log("database is seating now...");
        return pool
          .query(
            `copy products (product_name, size,descriptions, sku, dateAdded, loves, exclusive, online_only, limited_edition, free_shipping, price, product_image) from '${path.resolve(
              __dirname,
              "./products.csv"
            )}' delimiters ',' csv;`
          )
          .then(() => {
            console.log("Products seated, yay!");
            return pool
              .query(
                `copy categories (categories) from '${path.resolve(
                  __dirname,
                  "./categories.csv"
                )}' delimiters ',' csv;`
              )
              .then(() => {
                console.log("Categories seated, yay!");
                return `copy reviews (count, star_avg) from '${path.resolve(
                  __dirname,
                  "./reviews.csv"
                )}' delimiters ',' csv;`;
              });
          })
          .then(() => console.log("Reviews seated, yay!"))
          .catch(err => console.log(err));
      } else {
        console.log("database was not seated");
      }
    });
  });
});

module.exports = { pool };
