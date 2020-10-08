const { Router } = require("express");
const Order = require("../models").order;
const Product = require("../models").product;
const User = require("../models").user;
const Category = require("../models").category;
const OrderProduct = require("../models").orderProduct;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const orders = await Order.findAll({ include: [Product] });
    res.send(orders);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await Order.findByPk(id, {
      include: [
        {
          model: Product,
          include: [{ model: Category, attributes: ["name"] }],
          attributes: ["name"],
        },
        User,
      ],
    });
    const newOrder = { ...order, email: `${order.id}@aljsnakjd.com` };
    res.send(newOrder);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    // userId
    // what he's ordering? [1, 3, 7] = productsIds
    const { userId, productIds } = req.body;
    console.log(req.body);
    const newOrder = await Order.create({ userId });
    // tying together this new order with the products it needs.

    const newOrderProducts = productIds.map(
      async id =>
        await OrderProduct.create({ productId: id, orderId: newOrder.id })
    ); // [Promise, Promise, Promise]

    await Promise.all(newOrderProducts);

    res.send(newOrder);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
