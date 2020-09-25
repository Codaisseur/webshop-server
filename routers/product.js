const { Router } = require("express");
const Category = require("../models").category;
const Product = require("../models").product;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const categories = await Category.findAll({
      include: [Product],
    });
    res.json({ categories });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
