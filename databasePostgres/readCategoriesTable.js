const { Readable } = require("stream");
const { randomNumberDec } = require("../database/helpers.js")

class ReadCategoriesTable extends Readable {
    constructor(options) {
        super(options);
        this.count = 0;
        this.arrayOfCategories = ["lips", "eyes", "face", "powder", "contour", "brows", "lip liner", "eye liner", "eye shadow", "blush", "face wash", "face masks", "face serum", "shampoo", "conditioner"]
    }



    _read(size) {
        let category = this.arrayOfCategories[Math.floor(randomNumberDec(0, this.arrayOfCategories.length))]
        let string = `${ category }\n`;
        if (this.count === 1e7 - 1) {
            this.push(null);
        } else {
            this.push(string);
        }
        this.count += 1;
    }
}

module.exports = { ReadCategoriesTable };
