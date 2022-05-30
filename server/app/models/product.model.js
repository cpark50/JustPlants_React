module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    name: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.INTEGER
    },
    description: {
      type: Sequelize.STRING
    },
    water: {
      type: Sequelize.STRING
    },
    light: {
      type: Sequelize.STRING
    },
    pet: {
      type: Sequelize.BOOLEAN
    }
  });

  return Product;
};
