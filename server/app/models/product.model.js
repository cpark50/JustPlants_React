module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    p_name: {
      type: Sequelize.STRING
    },
    p_othername: {
      type: Sequelize.STRING
    },
    p_price: {
      type: Sequelize.INTEGER
    },
    p_size: {
      type: Sequelize.STRING
    },
    p_desc: {
      type: Sequelize.STRING
    },
    p_desc2: {
      type: Sequelize.STRING
    },
    p_water: {
      type: Sequelize.STRING
    },
    p_light: {
      type: Sequelize.STRING
    },
    p_pet: {
      type: Sequelize.BOOLEAN
    },
    imagename: {
      type: Sequelize.STRING
    }
  });

  return Product;
};
