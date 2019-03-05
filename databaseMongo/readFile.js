const { Readable } = require("stream");
const faker = require("faker");
const {
  randomNumberDec,
  randomNumberInt,
  randomNumberArr,
  generateSimilarList,
  generateLikeList
} = require("../database/helpers.js");

class ReadDocuments extends Readable {
  constructor(options) {
    super(options);
    this.count = 0;
  }

  _read(size) {
    let products = {};
    products.productid = this.count;
    products.productName = faker.lorem.word();
    products.size = randomNumberArr(randomNumberInt(1, 5));
    products.categories = faker.lorem.sentence();
    products.description = faker.lorem.sentence();
    products.sku = randomNumberInt(1000000, 2000000);
    products.stars = randomNumberDec(0, 5);
    products.reviews = randomNumberInt(0, 1000);
    products.newBadge = Math.random() >= 0.9;
    products.loves = randomNumberInt(0, 200000);
    products.exclusive = Math.random() >= 0.7;
    products.online_only = Math.random() >= 0.7;
    products.limited_edition = Math.random() >= 0.8;
    products.free_shipping = Math.random() >= 0.7;
    products.price = `$${randomNumberDec(1, 200)}`;
    products.image = `https://picsum.photos/300/300/?image=${Math.floor(
      Math.random() * 1000
    ) + 1}`;

    products = JSON.stringify(products);
    if (this.count === 0) this.push("[");
    if (this.count === 1e7 - 1) {
      this.push(`${products}]`);
      this.push(null);
    } else {
      this.push(products + ",");
    }
    this.count += 1;
  }
}

module.exports = { ReadDocuments };

// COPY Products FROM '/databasePostgres/data.csv' DELIMITERS ',' CSV;
