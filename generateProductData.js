var faker = require('faker');

module.exports = function() {
  var a = [];

  for (var i = 0; i < 100; i++) {
    a.push({
      item: faker.commerce.productName(),
      price: faker.commerce.price(),
      id: i,
      description: faker.commerce.productAdjective()
    });
  }

  return {products: a};
};
