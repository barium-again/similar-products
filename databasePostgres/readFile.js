const { Readable } = require("stream");
const fake = require("faker");
// const fake = Faker();
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
    let string = `${this.count},${fake.lorem.word()},"{${randomNumberArr(
      randomNumberInt(1, 5)
    )}}",${fake.lorem.word()},${fake.lorem.sentence(5)},${randomNumberInt(
      1000000,
      2000000
    )},${randomNumberDec(0, 5)},${randomNumberInt(0, 1000)},${Math.random() >=
      0.9},${randomNumberInt(0, 200000)},${Math.random() >=
      0.7},${Math.random() >= 0.7},${Math.random() >= 0.8},${Math.random() >=
      0.7},$${randomNumberDec(
      1,
      200
    )},https://picsum.photos/300/300/?image=${Math.floor(Math.random() * 1000) +
      1} \n`;
    if (this.count === 1e7 - 1) {
      this.push(null);
    } else {
      this.push(string);
    }
    this.count += 1;
  }
}

module.exports = { ReadDocuments };
