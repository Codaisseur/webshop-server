"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class orderProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      orderProduct.belongsTo(models.order);
      orderProduct.belongsTo(models.product);
    }
  }
  orderProduct.init(
    {
      orderId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "orderProduct",
    }
  );
  return orderProduct;
};
