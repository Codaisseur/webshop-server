const { ApolloError } = require("apollo-server-express");
const bcrypt = require("bcrypt");
const { toJWT } = require("../auth/jwt");

// db => Models from sequelize.
module.exports = {
  Query: {
    products: (parent, _args, { db }, info) => {
      return db.product.findAll({ include: [db.category] });
    },
    orders: (parent, _args, { db }, info) => {
      return db.order.findAll({ include: [db.product] });
    },
    categories: (parent, _args, { db }, info) => {
      return db.category.findAll({ include: [db.product] });
    },
    users: (parent, _args, { db }, info) => {
      return db.user.findAll();
    },
  },
  Mutation: {
    signup: async (parent, { fullName, email, password }, { db }, info) => {
      const hashedPassword = bcrypt.hashSync(password, 10);
      const newUser = await db.user.create({
        fullName,
        email,
        password: hashedPassword,
      });
      delete newUser["password"];
      return newUser;
    },
    login: async (parent, { email, password }, { db }, info) => {
      const user = await db.user.findOne({
        where: { email },
      });

      if (!user) return new ApolloError("User with that email not found", 404);

      const passwordsMatch = bcrypt.compareSync(password, user.password);
      if (!passwordsMatch) return new ApolloError("Password incorrect", 400);
      const token = toJWT({ userId: user.id });
      return { token };
    },
    order: async (parent, { productIds, userId }, { db }, info) => {
      console.log("parent", parent);

      // Create an order so we can use its Id
      const newOrder = await db.order.create({ userId });
      // Add all products to orderProduct table
      const productsToAdd = productIds.map(async pId => {
        return await db.orderProduct.create({
          productId: pId,
          orderId: newOrder.id,
        });
      });

      await Promise.all(productsToAdd);

      const orderToReturn = await db.order.findByPk(newOrder.id, {
        include: [db.product, db.user],
      });

      return orderToReturn;
    },
  },
};
