create database similarproducts

\c similarproducts

DROP TABLE IF EXISTS Products;

CREATE TABLE Products
(
    id INTEGER not null
    AUTO_INCREMENT,
  product_name VARCHAR
  size INTEGER,
  descript VARCHAR,
  sku INTEGER,
  stars INTEGER,
  reviews INTEGER,
  newBadge INTEGER,
  loves INTEGER,
  exclusives INTEGER,
 online_only INTEGER,
  limited_edition INTEGER,
  free-shipping INTEGER,
  price INTEGER,
  img VARCHAR,
    PRIMARY KEY
    (id)
);
    DROP TABLE IF EXISTS Category;

    create table Category
    (
        id INTEGER not null
        AUTO_INCREMENT,
        category VARCHAR,
PRIMARY KEY
        (id)
)
-- foreign keys

