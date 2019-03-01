const randomNumberDec = (min, max) => {
  return Number((Math.random() * (max - min) + min).toFixed(2));
};

const randomNumberInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomNumberArr = len => {
  return Array.from({ length: len }, () =>
    Number((Math.random() * 100).toFixed(2))
  );
};

const generateSimilarList = data => {
  const result = [];
  for (let i = 1; i <= 100; i++) {
    let newObj = { id: i, similar: [] };

    for (let i = 0; i < 15; i++) {
      newObj.similar.push(data[i]);
    }
    result.push(newObj);
  }
  return result;
};

const generateLikeList = data => {
  const result = [];
  for (let i = 1; i <= 100; i++) {
    let newObj = { id: i, like: [] };

    for (let i = 0; i < 15; i++) {
      let getData = data[randomNumberInt(0, 1500)];
      newObj.like.push(getData);
    }
    result.push(newObj);
  }
  return result;
};

module.exports = {
  randomNumberDec,
  randomNumberInt,
  randomNumberArr,
  generateSimilarList,
  generateLikeList
};

// non,[70.21,63.02,68.02],harum,'Minus consequatur distinctio nihil ab.',1502939,1.01,150,false,29130,false,false,true,false,$73.47,https://picsum.photos/300/300/?image=401

// insert into products (productname, size, categories, description, sku, stars, reviews, newBadge, loves, exclusive, online_only, limited_edition, free_shipping, price, image) values('non','{70.21,63.02,68.02}','harum','Minus consequatur distinctio nihil ab.',1502939,1.01,150,'false',29130,'false','false','true','false','$73.47','https://picsum.photos/300/300/?image=401');

// \copy (SELECT * FROM products) to 'C:\databasePostgres\oneData.csv' with csv
