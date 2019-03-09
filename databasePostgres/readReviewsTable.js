const { Readable } = require("stream");
const { randomNumberDec } = require("../database/helpers.js");

class ReadReviewsTable extends Readable {
  constructor(options) {
    super(options);
    this.count = 0;
  }

  _read(size) {
    let count = Math.floor(randomNumberDec(0, 1000));
    let star_avg = Math.floor(randomNumberDec(1, 6));
    let prod_id = Math.floor(randomNumberDec(1, 1e7));
    let string = `${count}, ${star_avg}, ${prod_id}\n`;
    if (this.count === 1e7 - 1) {
      this.push(null);
    } else {
      this.push(string);
    }
    this.count += 1;
  }
}

module.exports = { ReadReviewsTable };
