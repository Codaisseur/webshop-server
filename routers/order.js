const { Router } = require("express");
const Order = require("../models").order;
const Product = require("../models").product;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const orders = await Order.findAll({ include: [Product] });
    res.send(orders);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
