// const { SimilarList, LikeList } = require("../database/index.js");
const { pool } = require("../databasePostgres/index.js");
const { randomNumberDec } = require("../database/helpers.js");

let productidTime = [];
const getByProductId = (req, res) => {
  let { productid } = req.params;
  const time = process.hrtime();
  pool
    .query(`select * from products where id=${productid}`)
    .then(data => {
      const diff = process.hrtime(time);
      console.log(diff);
      productidTime.push(Number((diff[1] / 1e6).toFixed(2)));
      console.log(findAverageTime(productidTime), productidTime);
      return res.status(200).json(data.rows);
    })
    .catch(err => console.log("this is the error", err));
};

let productNameTime = [];
const getByProductName = (req, res) => {
  let { productname } = req.params;
  console.log("Generating time as we speak..");
  const time = process.hrtime();
  pool
    .query(`select * from products where productname like '${productname}'`)
    .then(data => {
      const diff = process.hrtime(time);
      productNameTime.push(Number((diff[1] / 1e6).toFixed(2)));
      console.log(findAverageTime(productNameTime), productNameTime);
      return res.status(200).json(data.rows);
    })
    .catch(err => console.log("this is the error", err));
};

const getLike = (req, res) => {
  let { id } = req.params;
  LikeList.find({ id })
    .then(data => res.status(200).json(data[0].like))
    .catch(err => console.log(err));
};

const findAverageTime = arr => {
  return arr.reduce((acc, curr) => {
    acc += curr;
    return Number((acc / arr.length).toFixed(2));
  }, 0);
};
// const getByProductId = (req, res) => {
//   SimilarList
//     .aggregate([{ $sample: { size:15 } }])
//     .then(data => res.status(200).json(data))
//     .catch(err => console.log(err))
// }

// let timeCat = []
const getProductByCat = (req, res) => {
  // console.log("Generating time as we speak ... ");
  // const time = process.hrtime();
  let categories = [
    "lips",
    "eyes",
    "face",
    "powder",
    "contour",
    "brows",
    "lip liner",
    "eye liner",
    "eye shadow",
    "blush",
    "face wash",
    "face masks",
    "face serum",
    "shampoo",
    "conditioner"
  ];
  let category = categories[Math.floor(randomNumberDec(0, categories.length))];
  pool
    .query(
      `SELECT * from categories c inner join products p on c.id=p.categories_id inner join reviews r on p.id = r.prod_id where c.categories = '${category}' limit 15;`
    )
    .then(data => {
      data.rows.map(obj => {
        let year = obj.dateadded.slice(12, 15);
        obj.dateadded = Number(year) < 2018 ? true : false;
        return obj;
      });
      return res.status(200).json(data.rows);
    })
    .catch(err => console.log("this is the error", err));
};

const verifyLoader = (req, res) => {
  res.status(200).send("hello");
};

module.exports = {
  getByProductId,
  getLike,
  getByProductName,
  getProductByCat,
  verifyLoader
};
