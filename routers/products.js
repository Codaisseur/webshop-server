const { Router } = require("express");
const Product = require("../models").product;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.send(products);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
