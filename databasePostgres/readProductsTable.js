const { Readable } = require("stream");
const fake = require("faker");
// const fake = Faker();
const {
  randomNumberDec,
  randomNumberInt,
  randomNumberArr
} = require("../database/helpers.js");

class ReadProductsTable extends Readable {
  constructor(options) {
    super(options);
    this.getDates = this.getDates.bind(this);
    this.count = 0;
    this.arrayOfDates = this.getDates(new Date("December 17, 2005"), new Date("February 7, 2019"))

  }

  getDates(startDate, stopDate) {
    Date.prototype.addDays = function (days) {
      var date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    }
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
      dateArray.push(new Date(currentDate));
      currentDate = currentDate.addDays(1);
    }
    return dateArray;
  }

  _read(size) {
    let product_name = fake.lorem.word();
    let product_size = randomNumberArr(randomNumberInt(1, 5));
    let descriptions = fake.lorem.sentence(5);
    let sku = randomNumberInt(1000000, 2000000);
    let dateAdded = this.arrayOfDates[randomNumberInt(0, this.arrayOfDates.length)]; // add random date generator here
    let loves = randomNumberInt(0, 1000);
    let exclusive = Math.random() >= 0.9;
    let online_only = Math.random() >= 0.9;
    let limited_edition = Math.random() >= 0.7;
    let free_shipping = Math.random() >= 0.7;
    let price = randomNumberDec(1, 200);
    let product_image = `https://picsum.photos/300/300/?image=${ Math.floor(Math.random() * 1000) + 1 }`
    let string = `${ product_name },"{${ product_size }}",${ descriptions },${ sku },${ dateAdded },${ loves },${ exclusive },${ online_only },${ limited_edition },${ free_shipping },$${ price }, ${ product_image } \n`;
    if (this.count === 1e7 - 1) {
      this.push(null);
    } else {
      this.push(string);
    }
    this.count += 1;
  }
}

module.exports = { ReadProductsTable };
